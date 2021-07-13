import React from 'react';
import MainIcon from './MainIcon';
import {mainIcons} from '../config'
import '../styles/Main.css'

class Main extends React.Component {
  getIcons () {
    return (
      <div className="main-icons d-flex flex-row justify-content-center align-items-center">
        {mainIcons.map((element, index) => (<MainIcon key={index} href={element.href} icon={element.icon} />))}
      </div>
    )
  }

  getMainLinks (mainLinks) {
    if(mainLinks) {
      return (        
        <div className="align-items main-links">
          {mainLinks.map((element, index) => (<a key={index} href={element.link} className={element.class}>{element.label}</a>))}
        </div>
      )
    }
  }

  render () {
    const {mainLinks} = this.props

    return (
      <main id="home" className="bg-image bg-image-cover d-flex flex-column justify-content-center align-items-center">
        <div className="main-items">
          <div className="main-logo bg-image bg-image-contain" />
            <div className="main-icons d-flex flex-row justify-content-center align-items-center">
              {this.getIcons()}            
            </div>
            {this.getMainLinks(mainLinks)}
        </div>
      </main>
    );
  }
}

export default Main;
