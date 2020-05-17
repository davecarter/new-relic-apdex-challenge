import {FromJsonHostAppDataToHostEntityListValueObjectMapper} from './fromJsonHostAppDataToHostEntityListValueObjectMapper'
import {HostValueObjectsFactory} from '../valueObjects/factory'
import {HostEntitiesFactory} from '../entities/factory'

class HostMappersFactory {
  static fromJsonHostAppDataToHostEntityListValueObjectMapper = ({config}) =>
    new FromJsonHostAppDataToHostEntityListValueObjectMapper({
      config,
      appNameValueObjectFactory: HostValueObjectsFactory.appNameValueObject,
      appsByHostNameListValueObjectFactory:
        HostValueObjectsFactory.appsByHostNameListValueObject,
      hostEntityFactory: HostEntitiesFactory.hostEntity
    })
}

export {HostMappersFactory}
