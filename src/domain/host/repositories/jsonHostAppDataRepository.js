class JsonHostAppDataRepository {
  constructor({mapper, config}) {
    this._mapper = mapper
    this._config = config
  }

  getTopAppsByHost() {
    const response = this._config.HOST_APP_DATA_TRUNKED
    return this._mapper.map(response)
  }
}

export {JsonHostAppDataRepository}
