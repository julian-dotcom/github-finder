import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const UserCard = ({ githubUser }) => {
    console.log(githubUser)
    return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={githubUser.avatar_url} />
            <Card.Body>
                <Card.Title>{githubUser.name}</Card.Title>
                { githubUser.bio !== null
                ? <Card.Text>{githubUser.bio}</Card.Text>
                : <></>
                }
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><Card.Link href={githubUser.html_url}>Link</Card.Link></ListGroupItem>
                {githubUser.email === null 
                ? <></>
                : <ListGroupItem><Card.Link href={githubUser.email}>Email</Card.Link></ListGroupItem>
                
                }
                <ListGroupItem>User Type<br /> {githubUser.type}</ListGroupItem>
                <ListGroupItem>Last updated <br /> {githubUser.updated_at}</ListGroupItem>
            </ListGroup>

          </Card> 
        </div>
    )
}

export default UserCard