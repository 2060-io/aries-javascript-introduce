import type { MessageHandler, MessageHandlerInboundMessage } from '@aries-framework/core'
import type { V1IntroduceProtocol } from '../V1IntroduceProtocol'

import { V1IntroduceProposalMessage } from '../messages'

export class V1IntroduceProposalHandler implements MessageHandler {
  private protocol: V1IntroduceProtocol
  public supportedMessages = [V1IntroduceProposalMessage]

  public constructor(protocol: V1IntroduceProtocol) {
    this.protocol = protocol
  }

  public async handle(messageContext: MessageHandlerInboundMessage<V1IntroduceProposalHandler>) {
    messageContext.assertReadyConnection()

    return this.protocol.processProposal(messageContext)
  }
}
