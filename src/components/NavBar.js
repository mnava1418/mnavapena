import React from 'react';

function NavBar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navBar-main">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Home">Features</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#Home">Pricing</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    
  );
}

export default NavBar;
