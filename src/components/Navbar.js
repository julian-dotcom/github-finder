import React from 'react'
import { Table, Form, Button, Alert, Navbar, Nav, FormControl } from 'react-bootstrap'


const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Github Finder</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form> */}
            </Navbar>
        </div>
    )
}

export default MyNavbar
