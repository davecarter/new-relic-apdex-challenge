class HostEntity {
  constructor({hostName}) {
    this._hostName = hostName
    this._applications = []
  }

  addAppToHosts(app) {
    this._applications.push(app)
  }

  removeAppFromHosts(app) {
    const idx = this._applications.indexOf(app)
    if (idx > -1) this._applications.splice(idx, 1)
  }

  applications() {
    return this._applications
  }

  hostName() {
    return this._hostName
  }

  toJSON() {
    return {
      hostName: this.hostName(),
      applications: this.applications().map(appNameValueObject =>
        appNameValueObject.toJSON()
      )
    }
  }
}

export {HostEntity}
