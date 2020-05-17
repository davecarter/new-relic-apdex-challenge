import {HostEntity} from './hostEntity'

class HostEntitiesFactory {
  static hostEntity = ({hostName}) =>
    new HostEntity({
      hostName
    })
}

export {HostEntitiesFactory}
