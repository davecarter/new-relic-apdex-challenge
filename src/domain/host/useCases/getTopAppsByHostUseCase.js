class GetTopAppsByHostUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  async execute() {
    const appsByHostNameListValueObject = await this._repository.getTopAppsByHost()
    return (
      appsByHostNameListValueObject && appsByHostNameListValueObject.toJSON()
    )
  }
}

export {GetTopAppsByHostUseCase}
