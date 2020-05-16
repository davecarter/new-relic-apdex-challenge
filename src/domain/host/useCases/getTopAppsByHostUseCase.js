class GetTopAppsByHostUseCase {
  constructor({repository, hostNameValueObjectFactory}) {
    this._repository = repository
    this._hostNameValueObjectFactory = hostNameValueObjectFactory
  }

  execute({hostName}) {
    const appsByHostNameListValueObject = this._repository.getApps({
      hostNameValueObject: this._hostNameValueObjectFactory({hostName})
    })

    return appsByHostNameListValueObject
  }
}

export {GetTopAppsByHostUseCase}
