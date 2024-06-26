import React, { useState } from 'react'
import "./style.css";
import { Form , Row , Col , Button , Container , Image} from 'react-bootstrap'
import { API_URL } from '../../globaldata/globaldata';

// accesso con profilo gia creto e modifica delle proprie informazioni
//caricare i dati e 



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
    //fect per recupero dati di compilazione cosi da fare una modifica dei soli dati inseriti
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
    console.log('invio')
    let data={
      "nome": nome,
      "cognome": cognome,
      "email": email,
      "password": password,
      "description": descript,
      "dataNascita": birth}
    let formData= new FormData()
    formData.append('data',JSON.stringify(data))
    formData.append('avatar',avatarImg);

    try {
      const response = await fetch(API_URL+'/sign/new',{
        method:"POST",
        body: formData,
      })
      // let result= await response.json();
      // console.log(result);
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
      <Row>
        <Col>
          <Image src={author.avatar} className="avatar m-3" roundedCircle />
        </Col>
      </Row>
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
          <Form.Label>Carica il tuo avatar</Form.Label>
          <Form.Control type="file" onChange={(e)=>setAvatarImg(e.target.files[0])} />
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
