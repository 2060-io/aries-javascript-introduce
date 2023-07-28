import type { MessageHandler, MessageHandlerInboundMessage } from '@aries-framework/core'
import type { V1IntroduceProtocol } from '../V1IntroduceProtocol'

import { V1IntroduceResponseMessage } from '../messages'

export class V1IntroduceResponseHandler implements MessageHandler {
  private protocol: V1IntroduceProtocol
  public supportedMessages = [V1IntroduceResponseMessage]

  public constructor(protocol: V1IntroduceProtocol) {
    this.protocol = protocol
  }

  public async handle(messageContext: MessageHandlerInboundMessage<V1IntroduceResponseHandler>) {
    messageContext.assertReadyConnection()

    return this.protocol.processResponse(messageContext)
  }
}
