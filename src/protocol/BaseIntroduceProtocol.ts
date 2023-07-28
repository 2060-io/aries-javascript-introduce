import { AgentContext, AgentMessage, DependencyManager, FeatureRegistry } from "@aries-framework/core";
import { IntroduceProtocol } from "./IntroduceProtocol";
import { IntroduceProposeOptions, IntroduceProtocolReturnType, IntroduceRequestOptions, IntroduceRespondOptions } from "./IntroduceProtocolOptions";

/**
 * Base implementation of the IntroduceProtocol that can be used as a foundation for implementing
 * the IntroduceProtocol interface.
 */
export abstract class BaseIntroduceProtocol implements IntroduceProtocol {
  public abstract propose(agentContext: AgentContext, options: IntroduceProposeOptions): Promise<IntroduceProtocolReturnType<AgentMessage>>
  public abstract request(agentContext: AgentContext, options: IntroduceRequestOptions): Promise<IntroduceProtocolReturnType<AgentMessage>>
  public abstract respond(agentContext: AgentContext, options: IntroduceRespondOptions): Promise<IntroduceProtocolReturnType<AgentMessage>>
  public abstract readonly version: string

  public abstract register(dependencyManager: DependencyManager, featureRegistry: FeatureRegistry): void
}
