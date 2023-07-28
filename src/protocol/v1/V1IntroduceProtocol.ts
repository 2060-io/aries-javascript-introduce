import { AgentContext, AgentMessage, DependencyManager, FeatureRegistry, InboundMessageContext, OutboundMessageContext, Protocol, injectable } from '@aries-framework/core'
import { BaseIntroduceProtocol } from '../BaseIntroduceProtocol'
import { V1IntroduceProposalMessage, V1IntroduceRequestMessage, V1IntroduceResponseMessage } from './messages'
import { V1IntroduceProposalHandler, V1IntroduceRequestHandler, V1IntroduceResponseHandler } from './handlers'
import { IntroduceProposeOptions, IntroduceProtocolReturnType, IntroduceRequestOptions, IntroduceRespondOptions } from '../IntroduceProtocolOptions'
import { IntroduceRecord } from '../../repository'
import { IntroduceRole, IntroduceState } from '../../model'

@injectable()
export class V1IntroduceProtocol extends BaseIntroduceProtocol {
  public async propose(agentContext: AgentContext, options: IntroduceProposeOptions): Promise<IntroduceProtocolReturnType<AgentMessage>> {
    const { connectionRecord, expiresTime, to, nwise } = options
    connectionRecord.assertReady()

    const message = new V1IntroduceProposalMessage({
      expiresTime,
      to,
      nwise
    })

      // Create record
      const introduceRecord = new IntroduceRecord({
        connectionId: connectionRecord.id,
        role: IntroduceRole.Introducer,
        state: IntroduceState.Arranging,
        menu: options.menu,
        threadId: menuMessage.threadId,
      })

      await this.actionMenuRepository.save(agentContext, actionMenuRecord)
      this.emitStateChangedEvent(agentContext, actionMenuRecord, null)

    return { message }
  }

  public async request(agentContext: AgentContext, options: IntroduceRequestOptions): Promise<IntroduceProtocolReturnType<AgentMessage>> {

  }
  public async respond(agentContext: AgentContext, options: IntroduceRespondOptions): Promise<IntroduceProtocolReturnType<AgentMessage>> {

  }

  public constructor() {
    super()
  }

  /**
   * The version of the message pickup protocol this class supports
   */
  public readonly version = 'v1' as const

  /**
   * Registers the protocol implementation (handlers, feature registry) on the agent.
   */
  public register(dependencyManager: DependencyManager, featureRegistry: FeatureRegistry): void {
    dependencyManager.registerMessageHandlers([new V1IntroduceRequestHandler(this), new V1IntroduceProposalHandler(this), new V1IntroduceResponseHandler(this)])

    featureRegistry.register(
      new Protocol({
        id: 'https://didcomm.org/introduce/1.0',
        roles: ['introducer', 'introducee'],
      })
    )
  }

  public async pickupMessages(
    agentContext: AgentContext,
    options: PickupMessagesProtocolOptions
  ): Promise<PickupMessagesProtocolReturnType<AgentMessage>> {
    const { connectionRecord, batchSize } = options
    connectionRecord.assertReady()

    const config = agentContext.dependencyManager.resolve(MessagePickupModuleConfig)
    const message = new V1BatchPickupMessage({
      batchSize: batchSize ?? config.maximumBatchSize,
    })

    return { message }
  }

  public async processProposal(messageContext: InboundMessageContext<V1IntroduceProposalMessage>) {

    const { message } = messageContext

    const batchMessage = new V1BatchMessage({
      messages: batchMessages,
    })

    return new OutboundMessageContext(batchMessage, { agentContext: messageContext.agentContext, connection })
  }

  public async processRequest(messageContext: InboundMessageContext<V1IntroduceRequestMessage>) {
  }

  public async processResponse(messageContext: InboundMessageContext<V1IntroduceResponseMessage>) {
  }

}
