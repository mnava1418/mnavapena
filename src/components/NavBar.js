import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../styles/NavBar.css'

import {app} from '../config'
import {getSiteInfo} from '../services/utils'

function NavBar({menu, locale, setSiteInfo}) {
    
    const getLocaleIcon = (currentLocale) => {
        let localeIcon = "🇺🇸"

        if(currentLocale === 'es') {
            localeIcon = "🇲🇽"
        }

        return localeIcon
    }     

    const setLocale = (locale) => {
        localStorage.setItem('locale', locale)
        setLocaleIcon(getLocaleIcon(locale))
        setSiteInfo(getSiteInfo(locale))
    }

    const [localeIcon, setLocaleIcon] = useState(getLocaleIcon(locale))

    const generateMenu = () => {        
        return (
            <Nav className="mr-auto">
                {Object.keys(menu).map((key) => (<Nav.Link key={key} href={`#${key}`}>{menu[key]}</Nav.Link>))}
                <NavDropdown title={localeIcon} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#locale/es" onClick={() => {setLocale('es')}}>🇲🇽&nbsp;&nbsp;&nbsp;Español</NavDropdown.Item>
                    <NavDropdown.Item href="#locale/en" onClick={() => {setLocale('en')}}>🇺🇸&nbsp;&nbsp;&nbsp;English</NavDropdown.Item>                        
                </NavDropdown>
            </Nav>
        )
    }

    return (
        <Navbar fixed="top" variant="dark" expand="lg" className="main-navBar">            
            <Navbar.Brand href={`mailto:${app.email}`} className="navBar-brand">{app.email}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {menu ? generateMenu() : ''}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
