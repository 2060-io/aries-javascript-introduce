import type { MessageHandler, MessageHandlerInboundMessage } from '@aries-framework/core'
import type { V1IntroduceProtocol } from '../V1IntroduceProtocol'

import { V1IntroduceRequestMessage } from '../messages'

export class V1IntroduceRequestHandler implements MessageHandler {
  private protocol: V1IntroduceProtocol
  public supportedMessages = [V1IntroduceRequestMessage]

  public constructor(protocol: V1IntroduceProtocol) {
    this.protocol = protocol
  }

  public async handle(messageContext: MessageHandlerInboundMessage<V1IntroduceRequestHandler>) {
    messageContext.assertReadyConnection()

    return this.protocol.processRequest(messageContext)
  }
}
