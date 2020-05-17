class HostEntity {
  constructor({hostName}) {
    this._hostName = hostName
    this._applications = []
  }

  addApplication(app) {
    this._applications.push(app)
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
