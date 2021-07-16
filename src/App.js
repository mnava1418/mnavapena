import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import '../src/styles/App.css'

import {getLocale, getSiteInfo} from './services/utils'

function App() {
  const locale = getLocale()
  const [siteInfo, setSiteInfo] = useState(getSiteInfo(locale))

  return (
    <div className='main-app'>
      <header>
        <NavBar menu={siteInfo.menu} locale={locale} setSiteInfo={setSiteInfo}/>
        <Main mainLinks={siteInfo.main}/>
      </header>
    </div>
  )
}

export default App