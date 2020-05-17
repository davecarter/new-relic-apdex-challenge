import React, {useState, useEffect} from 'react'
import {domain} from '../../domain'
import {PageHeader} from '../pageHeader'
import {Title} from '../title'
import {CardList} from '../cardList'

const HomePage = () => {
  const [isListView, setIsListView] = useState(false)
  const [appList, setAppList] = useState([])
  const {userEmail} = domain.get('config')

  useEffect(() => {
    domain
      .get('get_top_apps_by_host')
      .execute()
      .then(result => setAppList(result))
  })

  return (
    <>
      <PageHeader />
      <section className="homePage">
        <Title
          userEmail={userEmail}
          toggleView={() => setIsListView(!isListView)}
        />
        <CardList
          typeList={isListView ? 'list' : 'card'}
          appList={appList || []}
        />
      </section>
    </>
  )
}

export {HomePage}
