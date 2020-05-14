import React, {useState} from 'react'
import {PageHeader} from '../pageHeader'
import {Title} from '../title'
import {CardList} from '../cardList'

const HomePage = () => {
  const [isListView, setIsListView] = useState(false)
  const handleListView = () => {
    console.log('HANDLE', isListView)
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
          appList={[{id: 1}, {id: 2}]}
        />
      </section>
    </>
  )
}

export {HomePage}
