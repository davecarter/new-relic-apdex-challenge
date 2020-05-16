import React, {useState} from 'react'
import {PageHeader} from '../pageHeader'
import {Title} from '../title'
import {CardList} from '../cardList'

import mockedResponse from '../../domain/responseModel.json'

const HomePage = () => {
  const [isListView, setIsListView] = useState(false)
  const handleListView = () => {
    console.log('VIEW TYPE:', isListView ? 'list' : 'card')
    setIsListView(!isListView)
  }

  return (
    <>
      <PageHeader />
      <section className="homePage">
        <Title
          userEmail="averylongemailaddress@companyname.com"
          toggleView={handleListView}
        />
        <CardList
          typeList={isListView ? 'list' : 'card'}
          appList={mockedResponse}
        />
      </section>
    </>
  )
}

export {HomePage}
