import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Services from './components/Services'
import '../src/styles/App.css';
import {connect} from 'react-redux'

import {getLocale} from './services/utils'
import {setSiteInteraction} from './store/interactions'
import {siteInfoSelector} from './store/selectors'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.locale = getLocale()
  }

  componentDidMount () {
    setSiteInteraction(this.locale, this.props.dispatch)
  }

  render() {
    const {menu, main, services} = this.props.siteInfo

    return (
      <div className='main-app'>
        <header>
          <NavBar menu={menu} locale={this.locale}/>
          <Main mainLinks={main}/>
        </header>
        <Services info={services}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    siteInfo: siteInfoSelector(state)
})

export default connect(mapStateToProps)(App)
