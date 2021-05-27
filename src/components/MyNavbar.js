import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"

const MyNavbar = ({ setPage }) => {
    const history = useHistory()
    const handleClick = (direct) => {
        history.push(direct)
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand onClick={() => handleClick('home')} >Github Finder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => handleClick('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleClick('/about')}>About</Nav.Link>
                    <Nav.Link href='https://github.com/julian-dotcom'>Julian Meinhardt</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default MyNavbar
