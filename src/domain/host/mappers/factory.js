import {FromJsonHostAppDataToHostEntityListValueObjectMapper} from './fromJsonHostAppDataToHostEntityListValueObjectMapper'

class HostMappersFactory {
  static fromJsonHostAppDataToHostEntityListValueObjectMapper = ({config}) =>
    new FromJsonHostAppDataToHostEntityListValueObjectMapper({config})
}

export {HostMappersFactory}
