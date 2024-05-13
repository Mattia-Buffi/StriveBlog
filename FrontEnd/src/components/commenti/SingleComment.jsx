import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { UserSetting } from '../../context/UserSettingProvider'
import { API_URL } from '../../globaldata/globaldata'
import { MessageUser } from '../../context/MessageProvider'

export default function SingleComment({comment,setCommentsState}) {
  const {userSetting}=useContext(UserSetting)
  const {setMessageUser}=useContext(MessageUser)
  const deleteComment=async ()=>{

    let tokenAuth='Bearer '+userSetting.token; 
    try{
      const response = await fetch(API_URL+'/comments/'+comment._id,{
        method:"DELETE",
        headers:{"Authorization": tokenAuth}
        })
        if(response.ok){
          //messaggio di evvenuta cancellazione
          let result= await response.json()
          setCommentsState(result)
          setMessageUser({show:true,msn:'Commento Eliminato',isOk:false})
        }else{
          const error = new Error(`HTTP Error! Status: ${response.status}`)
          error.response=response;
          throw error;
        }
    }catch(err){
      console.error(err)
    }
  }
  return (
    <Card className='my-2'>
      <Card.Body>
        <Card.Title>{comment.author.nome+' '+comment.author.cognome}</Card.Title>
        <Card.Text>
          {comment.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {(comment.author._id===userSetting.author._id) && 
        <>
          <Button onClick={deleteComment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
          </svg>
          </Button>
          <Button>D</Button>
        </>
        /* se authore id uguale a quello nel contex allora abilito modifica e cancellazione del commento */}
      </Card.Footer>
    </Card>
  )
}
