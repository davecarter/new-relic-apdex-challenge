import React from 'react'
import PropTypes from 'prop-types'

const baseClass = 'title'

const Title = ({userEmail, toggleView}) => {
  return (
    <div className={baseClass}>
      <h2 className={`${baseClass}-heading`}>Apps by Host</h2>
      <h4 className={`${baseClass}-subHeading`}>for user {userEmail}</h4>
      <span className={`${baseClass}-toggle`}>
        <input id="toggleView" type="checkbox" onClick={toggleView} />
        <label htmlFor="toggleView">Show as list</label>
      </span>
    </div>
  )
}

Title.propTypes = {
  userEmail: PropTypes.string,
  toggleView: PropTypes.func
}

export {Title}
