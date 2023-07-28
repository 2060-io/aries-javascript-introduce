import { IntroduceRecord } from './repository'
import { IntroduceState } from './model'
import { BaseEvent } from '@aries-framework/core'

export enum IntroduceEventTypes {
  StateChanged = 'IntroduceStateChangedEvent',
}

export interface IntroduceStateChangedEvent extends BaseEvent {
  type: IntroduceEventTypes.StateChanged
  payload: {
    introduceRecord: IntroduceRecord
    previousState: IntroduceState | null
  }
}
