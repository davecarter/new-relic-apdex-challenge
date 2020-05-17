class FromJsonHostAppDataToHostEntityListValueObjectMapper {
  constructor({
    hostEntityFactory,
    appsByHostNameListValueObjectFactory,
    appNameValueObjectFactory,
    config
  }) {
    this._hostEntityFactory = hostEntityFactory
    this._appNameValueObjectFactory = appNameValueObjectFactory
    this._appsByHostNameListValueObjectFactory = appsByHostNameListValueObjectFactory
    this._config = config
  }

  _getHostsFromRawData = data => {
    const appsByHostNameList = new Map()
    data.forEach(appData => {
      const {name, apdex, contributors, version} = appData
      const app = this._appNameValueObjectFactory({
        name,
        apdex,
        contributors,
        version
      })

      this._groupByHost({app, hostsNames: appData.host, appsByHostNameList})
    })

    return appsByHostNameList
  }

  _groupByHost = ({app, hostsNames, appsByHostNameList}) => {
    hostsNames.forEach(hostName => {
      if (!appsByHostNameList.has(hostName))
        appsByHostNameList.set(hostName, this._hostEntityFactory({hostName}))

      appsByHostNameList.get(hostName).addApplication(app)
    })
  }

  map(data) {
    const appsByHostNameList = this._getHostsFromRawData(data)
    debugger
    return this._appsByHostNameListValueObjectFactory({
      appsByHostNameList
    })
  }
}

export {FromJsonHostAppDataToHostEntityListValueObjectMapper}
