import React from 'react'
import { Modal , Form , Button} from 'react-bootstrap'

export default function LoginModal({show,setShow}) {
    const handleClose=()=>setShow(false)
    
    //funzione di verifica corrispondenza credenziali
    //combacia email e password decript 
    //setto usersetting con oggetto utente 
    
    return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-dark" onClick={handleClose}>
        Sign In
        </Button>
        </Form>
        </Modal.Body>
    </Modal>
  )
}
