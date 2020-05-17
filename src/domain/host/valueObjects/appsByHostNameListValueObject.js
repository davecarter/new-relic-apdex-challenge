class AppsByHostNameListValueObject {
  constructor({appsByHostNameList}) {
    this._appsByHostNameList = appsByHostNameList
  }

  appsByHostNameList() {
    return this._appsByHostNameList
  }

  toJSON() {
    return this._appsByHostNameList
  }
}

export {AppsByHostNameListValueObject}
