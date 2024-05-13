import React from 'react'
import { Card , Placeholder, PlaceholderButton} from 'react-bootstrap'


export default function SkeletonCard() {
  return (
        <Card className="blog-card">
            <Card.Img variant="top" className="bg-secondary" style={{height:250}} />
            <Card.Body>
            <Placeholder as="Card.Title" animation='glow'>
            <Placeholder xs={5}></Placeholder>
            </Placeholder>
            </Card.Body>
            <Card.Footer>
            <Placeholder as="Card.Text" animation='glow'>
                <Placeholder xs={10}></Placeholder>
                <Placeholder xs={10}></Placeholder>
            </Placeholder>
            </Card.Footer>
        </Card>
)}
