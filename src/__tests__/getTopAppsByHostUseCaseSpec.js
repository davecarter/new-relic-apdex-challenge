import {domain} from '../domain'
import {expect} from 'chai'
import getTopAppsByHostUseCaseResponse from './fixtures/getTopAppsByHostUseCaseResponse.json'

describe('Given a JSON file to getTopAppsByHost useCase', () => {
  it('should return a list of Apps by Hosts sorted by Apdex', async () => {
    const useCaseResponse = await domain
      .get('get_top_apps_by_host')
      .execute()
      .then(useCaseResponse => useCaseResponse)

    expect(JSON.stringify(useCaseResponse)).to.be.deep.equal(
      JSON.stringify(getTopAppsByHostUseCaseResponse)
    )
  })
})
