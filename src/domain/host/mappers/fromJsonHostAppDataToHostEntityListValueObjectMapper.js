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
    const appsByHostNameListMap = new Map()
    data.forEach(appData => {
      const {name, apdex, contributors, version} = appData
      const appValueObject = this._appNameValueObjectFactory({
        name,
        apdex,
        contributors,
        version
      })

      this._groupByHost({
        appValueObject,
        hostsNames: appData.host,
        appsByHostNameListMap
      })
    })

    return appsByHostNameListMap
  }

  _groupByHost = ({appValueObject, hostsNames, appsByHostNameListMap}) => {
    hostsNames.forEach(hostName => {
      if (!appsByHostNameListMap.has(hostName))
        appsByHostNameListMap.set(hostName, this._hostEntityFactory({hostName}))

      appsByHostNameListMap.get(hostName).addApplication(appValueObject)
    })
  }

  _sortAppsByHostNameListMap = mapList => {
    const sortedMapList = []
    mapList.forEach(element => {
      sortedMapList.push({
        applications: element._applications
          .map(appVO => appVO.toJSON())
          .sort((a, b) => b.apdex - a.apdex)
          .slice(0, this._config.MAX_APPS_LENGTH),
        host: element._hostName
      })
    })

    return sortedMapList
  }

  map(data) {
    const appsByHostNameListMap = this._getHostsFromRawData(data)
    const sortedAppList = this._sortAppsByHostNameListMap(appsByHostNameListMap)

    return this._appsByHostNameListValueObjectFactory({
      appsByHostNameList: sortedAppList
    })
  }
}

export {FromJsonHostAppDataToHostEntityListValueObjectMapper}
