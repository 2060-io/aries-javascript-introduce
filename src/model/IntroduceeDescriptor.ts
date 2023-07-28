export interface IntroduceeDescriptorOptions {
    name: string
    description?: string
    proposed?: boolean
  }
  
  export class IntroduceeDescriptor {
    public name!: string
    public description?: string
    public proposed?: boolean
  
    public constructor(options: IntroduceeDescriptorOptions) {
      if (options) {
        this.name = options.name
        this.description = options.description
        this.proposed = options.proposed
      }
    }
  }
  