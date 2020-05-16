class JsonHostAppDataRepository {
  constructor({mapper, config}) {
    this._mapper = mapper
    this._config = config
  }

  async getApps({hostNameValueObject}) {
    const hostName = hostNameValueObject.value()

    const response = this._config.HOST_APP_DATA_TRUNKED
    return this._mapper.setParams(hostName).map(response)
  }
}

export {JsonHostAppDataRepository}
