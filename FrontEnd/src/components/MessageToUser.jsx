import React, { useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useState } from 'react'


export default function MessageToUser({messageUser}) {
    // const [show,setShow]=useState()
  // useEffect(()=>{
  //   setShow(true)
  // },[messageUser]) 
  console.log('messsaggio attivo')
  console.log(messageUser)
  return (
    <ToastContainer position="top-center" className="p-3 position-absolute" style={{ zIndex: 100 }}>
    <Toast bg={messageUser.isOk?'success':'danger'} onClose={()=>messageUser.show=false} show={messageUser.show} delay={8000} autohide>
      <Toast.Header>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
        </svg>
        <strong className="me-auto">{messageUser.isOk?'GOOD':'ERROR'}</strong>
      </Toast.Header>
      <Toast.Body>{messageUser.msn}</Toast.Body>
    </Toast>
    </ToastContainer>
  )
}
