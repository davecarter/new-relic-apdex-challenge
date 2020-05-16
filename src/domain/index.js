import {HostUseCasesFactory} from './host/useCases/factory'
import {config} from './config'

const useCases = {
  get_top_apps_by_host: HostUseCasesFactory.getTopAppsByHostUseCase({config}),
  config
}

export const domain = {
  get: key => useCases[key]
}
