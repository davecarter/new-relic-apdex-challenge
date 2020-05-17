class JsonHostAppDataRepository {
  constructor({mapper, config}) {
    this._mapper = mapper
    this._config = config
  }

  getJsonHostAppData() {
    const response = this._config.HOST_APP_DATA
    return this._mapper.map(response)
  }
}

export {JsonHostAppDataRepository}
