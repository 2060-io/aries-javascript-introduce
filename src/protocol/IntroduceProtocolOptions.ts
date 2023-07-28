import { ConnectionRecord, AgentMessage } from "@aries-framework/core"
import { IntroduceeDescriptorOptions } from "../model"

export interface IntroduceProposeOptions {
  connectionRecord: ConnectionRecord
  to: IntroduceeDescriptorOptions
  nwise?: boolean
  expiresTime: Date
}

export interface IntroduceRequestOptions {
  connectionRecord: ConnectionRecord
  to: IntroduceeDescriptorOptions
  nwise?: boolean
  expiresTime: Date
}

export interface IntroduceRespondOptions {
  connectionRecord: ConnectionRecord
  threadId: string
  approve: boolean
  outOfBandMessage?: AgentMessage
}

export type IntroduceProtocolReturnType<MessageType extends AgentMessage> = {
  message: MessageType
}
