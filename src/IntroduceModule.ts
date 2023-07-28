import type { DependencyManager, FeatureRegistry, Module } from '@aries-framework/core'

import { IntroduceApi } from './IntroduceApi'
import { IntroduceRepository } from './repository'
import { V1IntroduceProtocol } from './protocol'

export class IntroduceModule implements Module {
  public readonly api = IntroduceApi

  /**
   * Registers the dependencies of media sharing module on the dependency manager.
   */
  public register(dependencyManager: DependencyManager) {
    // Api
    dependencyManager.registerContextScoped(IntroduceApi)

    // Protocols
    dependencyManager.registerSingleton(V1IntroduceProtocol)

    // Repositories
    dependencyManager.registerSingleton(IntroduceRepository)
  }
}
