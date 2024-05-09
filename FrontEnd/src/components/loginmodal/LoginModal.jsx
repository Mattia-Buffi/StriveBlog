import React from 'react'
import { Modal , Form , Button} from 'react-bootstrap'
import { useState } from 'react'
import DashboardUser from '../../views/dashboardUser/DashboardUser'
import { API_URL } from '../../globaldata/globaldata'
import { useContext } from 'react'
import {UserSetting} from '../../context/UserSettingProvider'

export default function LoginModal({show,setShow}) {
  const[validation,setValidation]=useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {setUserSetting}=useContext(UserSetting)

  const handleClose=()=>setShow(false)

  //funzione di verifica corrispondenza credenziali
  function handleSubmit(e){
    e.preventDefault();
    if(e.currentTarget.checkValidity()===false){
      e.stopPropagation();
    }
    setValidation(true)
    if(e.currentTarget.checkValidity()) getAuthorization();
  }
  async function getAuthorization(e){
    e.preventDefault();
    const keys={email: email, password: password}
    try {
      console.log(keys)
      console.log(API_URL+'/sign/login')
      const response = await fetch(API_URL+'/sign/login',{
        method:"POST",
        body: JSON.stringify(keys),
        headers:{ 'content-type': 'application/JSON' }
      })
      if(response.ok){
        let result= await response.json();
          //messaggio di evvenuto logIn
          console.log(result);
          //salvataggio in local
          //aggiotnamento context
          setUserSetting(result);
          handleClose();
          
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
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Effettua l'accesso per i contenuti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validation} >
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
        </Form.Group>
        <Button variant="outline-dark" type='submit' onClick={(e)=>getAuthorization(e)}>
        Sign In
        </Button>
        </Form>
        {/* <DashboardUser isNew={false}/> */}
        </Modal.Body>
    </Modal>
  )
}
