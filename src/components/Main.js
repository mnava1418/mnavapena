import React from 'react';
import NavBar from './NavBar'

function Main() {
  return (
    <section id="home" className="home">
     <NavBar />
     <main id="main" className="main">
       <div className="main-banner" />
     </main>
    </section>
  );
}

export default Main;
