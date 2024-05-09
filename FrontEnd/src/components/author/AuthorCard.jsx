import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function AuthorCard({author}) {
  return (
    <Link to={`/author/${author._id}/posts`} className='author-link'>
        <Card>
            <Card.Img variant="top" src={author.avatar} roundedCircle />
            <Card.Body>
              <Card.Title>{author.nome+' '+author.cognome}</Card.Title>
              <Card.Text>
                {author.description}
              </Card.Text>
            </Card.Body>
          </Card>
    </Link>
  )
}
