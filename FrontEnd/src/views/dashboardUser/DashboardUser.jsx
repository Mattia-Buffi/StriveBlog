import React, { useState } from 'react'
import { Form , Row , Col , Button , Container} from 'react-bootstrap'
import { API_URL } from '../../globaldata/globaldata';

export default function DashboardUser({isNew}) {
  let author={}
  if(isNew){
    //creano un oggetto di default
    author={
      nome:'name',
      cognome:'Surname',
      email:'yourmail@mail.com as usermane',
      dataNascita:'12/11/2002',
      description:'Write some word about you',
    }
  }else{
    //fect per recupero dati di compilazione cosi da fare una modifica 
  }
  const [nome,setNome]=useState();
  const [cognome,setCognome]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [descript,setDescript]=useState();
  const [birth,setBirth]=useState();
  const [avatarImg,setAvatarImg]=useState();


  const sendToServer= async (e)=>{
    e.preventDefault();
    let userBody={
      "nome": nome,
      "cognome": cognome,
      "email": email,
      "password":password,
      "dataNascita": birth,
      "description": descript,
    }
    console.log(e.target)
    let formData= new FormData(e.target);
    formData.append("avatar",avatarImg)
    try {
      const response = await fetch(API_URL+'/authors/',{
        method:"POST",
        body: formData,
        headers:{ 'content-type': 'multipart/form-data' }
      })
      let result= await response.json();
      console.log(result);
      if(response.ok){
          //messaggio di evvenuto inserimento
          
      }else{
          const error = new Error(`HTTP Error! Status: ${response.status}`)
          error.response=response;
          throw error;
      } 
    }catch (error) {
            console.error(error)
    }
  }

  return (
    <Container style={{marginTop:120}}>
    <Form name="formNewUser" onSubmit={(e)=>sendToServer(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="newName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder={author.nome} value={nome} onChange={(e)=>setNome(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="newCognome">
          <Form.Label>Cognome</Form.Label>
          <Form.Control type="text" placeholder={author.cognome} value={cognome} onChange={(e)=>setCognome(e.target.value)}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="newEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={author.email} value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="newPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="newEmail">
          <Form.Label>Data di Nascita</Form.Label>
          <Form.Control type="date" placeholder={author.dataNascita} value={birth} onChange={(e)=>setBirth(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="newImg">
          <Form.Label>Immagine profilo</Form.Label>
          <Form.Control type="file" name="avatar" value={avatarImg} onChange={(e)=>setAvatarImg(e.target.value)} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="newDescript">
        <Form.Label>Descrivi qualcosa di te</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder={author.description} value={descript} onChange={(e)=>setDescript(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}
