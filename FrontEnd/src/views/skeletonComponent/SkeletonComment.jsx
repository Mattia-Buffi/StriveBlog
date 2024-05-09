import React from 'react'
import { Card , Placeholder, PlaceholderButton} from 'react-bootstrap'
// import NewComment from '../../components/commenti/NewComment'

export default function SkeletonComment() {
  return (
    <Card className='my-2'>
      <Card.Body>
      <Placeholder as="Card.Title" animation='glow'>
        <Placeholder xs={5}></Placeholder>
      </Placeholder>
        <Placeholder as="Card.Text" animation='glow'>
            <Placeholder xs={10}></Placeholder>
            <Placeholder xs={10}></Placeholder>
        </Placeholder>
      </Card.Body>
      <Card.Footer>
        <PlaceholderButton className="mt-1" variant="secondary">
            Rispondi
        </PlaceholderButton>
        {/* <NewComment/> */}
      </Card.Footer>
    </Card>
  )
}
