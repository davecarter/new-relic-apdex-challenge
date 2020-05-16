class HostNameValueObject {
  constructor({hostName}) {
    this._hostName = hostName
  }

  value() {
    return this._hostName
  }
}

export {HostNameValueObject}
