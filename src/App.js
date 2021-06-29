import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Services from './components/Services'
import Resume from './components/Resume'
import {connect} from 'react-redux'

import {getLocale} from './services/utils'
import {setSiteInteraction} from './store/interactions'

class App extends React.Component {
  componentDidMount () {
    setSiteInteraction(getLocale(), this.props.dispatch)
  }

  render() {
    return (
      <div>
        <header>
          <NavBar />
          <Main />
        </header>
        <Services />
        <Resume />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(App);
