import {GetTopAppsByHostUseCase} from './getTopAppsByHostUseCase'
import {HostRepositoryFactory} from '../repositories/factory'

class HostUseCasesFactory {
  static getTopAppsByHostUseCase = ({config}) =>
    new GetTopAppsByHostUseCase({
      repository: HostRepositoryFactory.jsonHostAppDataRepository({config})
    })
}

export {HostUseCasesFactory}
