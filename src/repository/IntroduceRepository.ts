import { EventEmitter, InjectionSymbols, Repository, StorageService } from '@aries-framework/core'
import { inject, scoped, Lifecycle } from 'tsyringe'
import { IntroduceRecord } from './IntroduceRecord'

@scoped(Lifecycle.ContainerScoped)
export class IntroduceRepository extends Repository<IntroduceRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService)
    storageService: StorageService<IntroduceRecord>,
    eventEmitter: EventEmitter
  ) {
    super(IntroduceRecord, storageService, eventEmitter)
  }
}
