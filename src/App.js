import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
