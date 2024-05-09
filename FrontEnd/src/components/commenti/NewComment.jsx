import React, { useState } from 'react'
import { Card , Button, CardFooter , Form} from 'react-bootstrap'

export default function NewComment() {
    const [text,setText]=useState();
    async function sendComment(){
        //fetch di invio commento
    }
  return (
    <Card bg='light'>
      <Card.Body>
      <Card.Title>Nome Utene</Card.Title>
        <Card.Text>
            <Form.Control type="text" placeholder="Inserisci qui il tuo commento" rows={4} value={text}
                onChange={(e)=>setText(e)}/>
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <Button variant="secondary" onClick={()=>sendComment()}>Commneta</Button>
      </CardFooter>
    </Card>
  )
}
