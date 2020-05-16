import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'card'

const Card = ({applications, host}) => (
  <article className={baseClass}>
    <h4 className={`${baseClass}-host`}>{host}</h4>
    <ul className={`${baseClass}-listContainer`}>
      {applications?.map(app => {
        const {apdex, name, version} = app
        return (
          <li key={name} className={`${baseClass}-item`}>
            <button
              className={`${baseClass}-button`}
              onClick={() => window.alert(`Version: ${version}`)}
            >
              <span className={`${baseClass}-apdex`}>{apdex}</span>
              <span className={`${baseClass}-name`}>{name}</span>
            </button>
          </li>
        )
      })}
    </ul>
  </article>
)

Card.propTypes = {
  applications: PropTypes.array,
  host: PropTypes.string
}

export {Card}
