import React from 'react'
import MainIcon from './MainIcon';
import '../styles/Main.css'

import {mainIcons} from '../config'

function Main({mainLinks}) {

  const getIcons = () => {
    return (
      <div className="main-icons d-flex flex-row justify-content-center align-items-center">
        {mainIcons.map((element, index) => (<MainIcon key={index} href={element.href} icon={element.icon} />))}
      </div>
    )
  }

  const getMainLinks = () => {
    return (              
      <div className="align-items main-links">
        {mainLinks.map((element, index) => (<a key={index} href={element.link} className={element.class}>{element.label}</a>))}
      </div>
    )
  }

  return (
    <main id="home" className="bg-image bg-image-cover d-flex flex-column justify-content-center align-items-center">
      <div className="main-items">
        <div className="main-logo bg-image bg-image-contain" />
          <div className="main-icons d-flex flex-row justify-content-center align-items-center">
            {getIcons()}
          </div>
          {mainLinks ? getMainLinks() : ''}
      </div>
    </main>
  )
}

export default Main
