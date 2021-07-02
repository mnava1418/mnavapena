import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {app} from '../config'
import '../styles/NavBar.css'

const getMenuItems = (menu) => {
    if(menu) {
        return (
            <Nav className="mr-auto">
                {Object.keys(menu).map((key) => (<Nav.Link key={key} href={`#${key}`}>{menu[key]}</Nav.Link>))}
            </Nav>
        )
    }
}

class MainBar extends React.Component {
    render() {
        const {menu} = this.props
        return (
            <Navbar fixed="top" variant="dark" expand="lg" className="main-navBar">
                <Navbar.Brand href={`mailto:${app.email}`} className="navBar-brand">{app.email}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {getMenuItems(menu)}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainBar