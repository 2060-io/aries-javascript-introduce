# Aries JavaScript Introduce extension module

This module is used to provide an Aries Agent built with Aries Framework JavaScript means to manage [Introduce protocol](https://github.com/hyperledger/aries-rfcs/blob/main/features/0028-introduce/README.md).

It's conceived as an extension module for Aries Framework JavaScript which can be injected to an existing agent instance:

```ts
import { IntroduceModule } from 'aries-javascript-introduce'

const agent = new Agent({
  config: {
    /* agent config */
  },
  dependencies,
  modules: { introduce: new IntroduceModule() },
})
```

Once instantiated, introduce module API can be accessed under `agent.modules.introduce` namespace

## Usage

> **TODO**
