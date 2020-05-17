class AppNameValueObject {
  constructor({name, apdex, contributors, version}) {
    this._name = name
    this._apdex = apdex
    this._contributors = contributors
    this._version = version
  }

  name() {
    return this._name
  }

  apdex() {
    return this._apdex
  }

  contributors() {
    return this._contributors
  }

  version() {
    return this._version
  }

  toJSON() {
    return {
      name: this.name(),
      apdex: this.apdex(),
      contributors: this.contributors(),
      version: this.version()
    }
  }
}

export {AppNameValueObject}
