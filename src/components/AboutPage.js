import React from 'react'
import { Card, Button } from 'react-bootstrap'
import photo from '../Capture.png'

const AboutPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Card style={{ width: '80%', display: 'block' }}>
            <Card.Img variant="top" src={photo} alt='Image of Julian Meinhardt' style={{minWidth: '60%', maxWidth: '600px', height: 'auto', textAlign: 'center'}} />
            <Card.Body>
            <Card.Title>About this app</Card.Title>
            <Card.Text>
                Type any username available on Github and my application will return various details on the user. <br /><br />
                Please note that Github's servers may be slow, and require time to return information. <br /><br />
                This application has been made by Julian Meinhardt to showcase my React and React-Bootstrap proficiency.  
                To fetch information from Github I use an axios.get request.
            </Card.Text>
            <Button variant="primary" href='https://github.com/julian-dotcom'>My Github</Button>
            </Card.Body>
          </Card>
        </div>
    )
}

export default AboutPage