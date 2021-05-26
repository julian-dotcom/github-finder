import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'

const FormSearch = ({ search, setSearch, setGithubUser }) => {



    const handleChange = event => {
        //setSearch(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <div className='border'>
            <Form>  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search by username</Form.Label>
                <Form.Control type="username" placeholder="username" onChange={handleChange} />
                <Form.Text className="text-muted">
                Results will appear while you type. I preset Github because their profile completely filled out.
                </Form.Text>
            </Form.Group>
            </Form>
        </div>
    )
}

export default FormSearch 
