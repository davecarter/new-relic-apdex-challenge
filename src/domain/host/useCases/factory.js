import {GetTopAppsByHostUseCase} from './getTopAppsByHostUseCase'
import {HostRepositoryFactory} from '../repositories/factory'
import {HostValueObjectsFactory} from '../valueObjects/factory'

class HostUseCasesFactory {
  static getTopAppsByHostUseCase = ({config}) =>
    new GetTopAppsByHostUseCase({
      repository: HostRepositoryFactory.jsonHostAppDataRepository({config}),
      hostNameValueObjectFactory: HostValueObjectsFactory.hostNameValueObject
    })
}

export {HostUseCasesFactory}
