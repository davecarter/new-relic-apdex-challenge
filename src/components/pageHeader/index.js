import React from 'react'

const baseClass = 'PageHeader'

const PageHeader = () => (
  <header className={baseClass}>
    <span className={`${baseClass}-Logo`}>
      <img alt="New Relic logo" src="./src/assets/logo.svg" />
    </span>
    <h1 className={`${baseClass}-Title`}>
      Apdex board code challenge project by
    </h1>
    <a
      className={`${baseClass}-Author`}
      title="twitter account of David G"
      href="https://twitter.com/@d4vecarter"
    >
      David Garcia
    </a>
  </header>
)

export {PageHeader}
