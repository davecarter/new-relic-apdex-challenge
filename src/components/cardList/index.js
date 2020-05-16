import React from 'react'
import PropTypes from 'prop-types'

import {Card} from '../card'

const baseClass = 'cardList'

const CardList = ({appList, typeList}) => {
  return (
    <div className={`${baseClass}--${typeList}`}>
      {appList.map(card => {
        return (
          <Card
            key={card.host}
            host={card.host}
            applications={card.applications}
          />
        )
      })}
    </div>
  )
}

CardList.propTypes = {
  appList: PropTypes.array,
  typeList: PropTypes.string
}

export {CardList}
