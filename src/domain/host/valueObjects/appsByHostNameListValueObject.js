class AppsByHostNameListValueObject {
  constructor({appsByHostNameList}) {
    this._appsByHostNameList = appsByHostNameList
  }

  appsByHostNameList() {
    return this._appsByHostNameList
  }

  toJSON() {
    debugger
    return this._appsByHostNameList.forEach(hostEntity => hostEntity)
  }
}

export {AppsByHostNameListValueObject}
