import { AgentMessage, IsValidMessageType, parseMessageType } from '@aries-framework/core';
import { Expose, Type } from 'class-transformer'
import { IsBoolean, IsOptional } from 'class-validator'
import { IntroduceeDescriptor, IntroduceeDescriptorOptions } from '../../../model';

export interface V1IntroduceRequestMessageOptions  { 
  id?: string
  to: IntroduceeDescriptorOptions
  nwise?: boolean
  expiresTime: Date
}
/**
 *
 * @see https://github.com/hyperledger/aries-rfcs/blob/main/features/0028-introduce/README.md#request
 */
export class V1IntroduceRequestMessage extends AgentMessage {
  public constructor(options: V1IntroduceRequestMessageOptions) {
    super()

    if (options) {
      this.id = options.id || this.generateId()
      this.to = new IntroduceeDescriptor(options.to)
      this.nwise = options.nwise
      
      if (options.expiresTime) this.setTiming({expiresTime: options.expiresTime })
    }
  }

  @IsValidMessageType(V1IntroduceRequestMessage.type)
  public readonly type = V1IntroduceRequestMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/introduce/1.0/request')

  @Type(() => IntroduceeDescriptor)
  @Expose({ name: 'please_introduce_to' })
  public to!: IntroduceeDescriptor
  
  @IsBoolean()
  @IsOptional()
  public nwise?: boolean

}
