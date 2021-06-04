import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Services from './components/Services'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
          <Main />
        </header>
        <Services />
      </div>
    );
  }
}

export default App;
