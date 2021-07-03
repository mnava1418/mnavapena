import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import {connect} from 'react-redux'
import {app} from '../config'
import '../styles/NavBar.css'
import {getLocale} from '../services/utils'
import {setSiteInteraction} from '../store/interactions'

class MainBar extends React.Component {
    constructor(props) {
        super(props)
        const currLocale = getLocale()

        this.state = {
            locale: currLocale,
            localeIcon: this.getLocaleIcon(currLocale)
        }
    }

    getLocaleIcon(locale) {
        if(locale === 'es') {
            return "🇲🇽"
        } else {
            return "🇺🇸"
        }
    }

    setLocale(locale) {
        localStorage.setItem('locale', locale)      
        this.setState((state) => ({...state, localeIcon: this.getLocaleIcon(locale)}))
        setSiteInteraction(locale, this.props.dispatch)
    }

    generateMenu(menu) {
        if(menu) {
            return (
                <Nav className="mr-auto">
                    {Object.keys(menu).map((key) => (<Nav.Link key={key} href={`#${key}`}>{menu[key]}</Nav.Link>))}
                    <NavDropdown title={this.state.localeIcon} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#locale/es" onClick={() => {this.setLocale('es')}}>🇲🇽&nbsp;&nbsp;&nbsp;Español</NavDropdown.Item>
                        <NavDropdown.Item href="#locale/en" onClick={() => {this.setLocale('en')}}>🇺🇸&nbsp;&nbsp;&nbsp;English</NavDropdown.Item>                        
                    </NavDropdown>
                </Nav>
            )
        }
    }

    render() {
        const {menu} = this.props
        return (
            <Navbar fixed="top" variant="dark" expand="lg" className="main-navBar">
                <Navbar.Brand href={`mailto:${app.email}`} className="navBar-brand">{app.email}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {this.generateMenu(menu)}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(MainBar)
