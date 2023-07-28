import { AgentMessage, IsValidMessageType, parseMessageType } from '@aries-framework/core';
import { Expose, Type } from 'class-transformer'
import { IsBoolean, IsOptional } from 'class-validator'

export interface V1IntroduceResponseMessageOptions  { 
  id?: string
  threadId: string
  approve: boolean
  outOfBandMessage?: AgentMessage
}
/**
 *
 * @see https://github.com/hyperledger/aries-rfcs/blob/main/features/0028-introduce/README.md#response
 */
export class V1IntroduceResponseMessage extends AgentMessage {
  public constructor(options: V1IntroduceResponseMessageOptions) {
    super()

    if (options) {
      this.id = options.id || this.generateId()
      this.setThread({ threadId: options.threadId })
      this.approve = options.approve
      this.outOfBandMessage = options.outOfBandMessage
    }
  }

  @IsValidMessageType(V1IntroduceResponseMessage.type)
  public readonly type = V1IntroduceResponseMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/introduce/1.0/response')

  @Type(() => AgentMessage)
  @IsOptional()
  @Expose({ name: 'oob-message' })
  public outOfBandMessage?: AgentMessage
  
  @IsBoolean()
  public approve!: boolean

}
