import { AriesFrameworkError, BaseRecord, utils } from '@aries-framework/core'
import { IntroduceRole, IntroduceState, IntroduceeDescriptor } from '../model'
import { Type } from 'class-transformer'


export interface IntroduceStorageProps {
  id?: string
  createdAt?: Date
  connectionId: string
  threadId?: string
  parentThreadId?: string
  introducee?: IntroduceeDescriptor
  expiresTime?: Date
  role: IntroduceRole
  state: IntroduceState
}

export class IntroduceRecord extends BaseRecord<any, any, any> {
  public connectionId!: string
  public threadId?: string
  public parentThreadId?: string
  public role!: IntroduceRole
  public state!: IntroduceState
  public expiresTime?: Date

  @Type(() => IntroduceeDescriptor)
  public introducee?: IntroduceeDescriptor

  public static readonly type = 'IntroduceRecord'
  public readonly type = IntroduceRecord.type

  public constructor(props: IntroduceStorageProps) {
    super()
    if (props) {
      this.id = props.id ?? utils.uuid()
      this.createdAt = props.createdAt ?? new Date()
      this.role = props.role
      this.state = props.state
      this.connectionId = props.connectionId
      this.threadId = props.threadId
      this.parentThreadId = props.parentThreadId
      this.introducee = props.introducee
      this.expiresTime = props.expiresTime
    }
  }

  public getTags() {
    return {
      ...this._tags,
      threadId: this.threadId,
      parentThreadId: this.parentThreadId,
      connectionId: this.connectionId,
      role: this.role,
      state: this.state,
    }
  }

  public assertRole(expectedRole: IntroduceRole) {
    if (this.role !== expectedRole) {
      throw new AriesFrameworkError(
        `Introduce record has invalid role ${this.role}. Expected role ${expectedRole}.`
      )
    }
  }

  public assertState(expectedStates: IntroduceState | IntroduceState[]) {
    if (!Array.isArray(expectedStates)) {
      expectedStates = [expectedStates]
    }

    if (!expectedStates.includes(this.state)) {
      throw new Error(
        `Introduce record is in invalid state ${this.state}. Valid states are: ${expectedStates.join(', ')}.`
      )
    }
  }
}
