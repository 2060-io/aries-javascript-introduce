import { AgentContext, AgentMessage, DependencyManager, FeatureRegistry } from "@aries-framework/core"
import { IntroduceProposeOptions, IntroduceProtocolReturnType, IntroduceRequestOptions, IntroduceRespondOptions } from "./IntroduceProtocolOptions"


export interface IntroduceProtocol {
  readonly version: string

  propose(
    agentContext: AgentContext,
    options: IntroduceProposeOptions
  ): Promise<IntroduceProtocolReturnType<AgentMessage>>

  request(
    agentContext: AgentContext,
    options: IntroduceRequestOptions
  ): Promise<IntroduceProtocolReturnType<AgentMessage>>

  respond(
    agentContext: AgentContext,
    options: IntroduceRespondOptions
  ): Promise<IntroduceProtocolReturnType<AgentMessage>>

  register(dependencyManager: DependencyManager, featureRegistry: FeatureRegistry): void
}
