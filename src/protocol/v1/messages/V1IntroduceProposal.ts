import { AgentMessage, IsValidMessageType, parseMessageType } from '@aries-framework/core';
import { Type } from 'class-transformer'
import { IsBoolean, IsOptional } from 'class-validator'
import { IntroduceeDescriptor, IntroduceeDescriptorOptions } from '../../../model';

export interface V1IntroduceProposalMessageOptions  { 
  id?: string
  to: IntroduceeDescriptorOptions
  nwise?: boolean
  expiresTime: Date
}
/**
 *
 * @see https://github.com/hyperledger/aries-rfcs/blob/main/features/0028-introduce/README.md#proposal
 */
export class V1IntroduceProposalMessage extends AgentMessage {
  public constructor(options: V1IntroduceProposalMessageOptions) {
    super()

    if (options) {
      this.id = options.id || this.generateId()
      this.to = new IntroduceeDescriptor(options.to)
      this.nwise = options.nwise
      
      if (options.expiresTime) this.setTiming({expiresTime: options.expiresTime })
    }
  }

  @IsValidMessageType(V1IntroduceProposalMessage.type)
  public readonly type = V1IntroduceProposalMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/introduce/1.0/proposal')

  @Type(() => IntroduceeDescriptor)
  public to!: IntroduceeDescriptor
  
  @IsBoolean()
  @IsOptional()
  public nwise?: boolean

}
