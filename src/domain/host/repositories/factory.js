import {JsonHostAppDataRepository} from './jsonHostAppDataRepository'
import {HostMappersFactory} from '../mappers/factory'

class HostRepositoryFactory {
  static jsonHostAppDataRepository = ({config}) =>
    new JsonHostAppDataRepository({
      mapper: HostMappersFactory.fromJsonHostAppDataToHostEntityListValueObjectMapper(
        {config}
      ),
      config
    })
}

export {HostRepositoryFactory}
