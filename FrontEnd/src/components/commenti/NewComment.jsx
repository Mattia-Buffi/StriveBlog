import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card , Button, CardFooter , Form} from 'react-bootstrap'
import { UserSetting } from "../../context/UserSettingProvider";
import { API_URL } from '../../globaldata/globaldata';
import { MessageUser } from '../../context/MessageProvider';

export default function NewComment({setCommentsState}) {
  const [text,setText]=useState();
  const {userSetting}=useContext(UserSetting);
  const {setMessageUser}=useContext(MessageUser)
  const params = useParams();
  const { id } = params;

    async function sendComment(){
        //fetch di invio commento
        let tokenAuth='Bearer '+userSetting.token; 
        let data={'content': text,}
        try {
          const response = await fetch(API_URL+'/comments/post/'+id+'/new',{
          method:"POST",
          body: JSON.stringify(data),
          headers:{"Authorization": tokenAuth,"content-type":"application/json"}
          })
          let result= await response.json();
          //ottengo in risposta il nuovo elenco commenti
          setCommentsState(result)
          setText('')
          setMessageUser({show:true,msn:'Commento inserito',isOk:true})
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
    <Card bg='light'>
      <Card.Body>
      <Card.Title>{userSetting.author.nome}</Card.Title>
        <Card.Text>
            <Form.Control type="text" placeholder="Inserisci qui il tuo commento" rows={4} value={text}
                onChange={(e)=>setText(e.target.value)}/>
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <Button variant="secondary" onClick={()=>sendComment()}>Commenta</Button>
      </CardFooter>
    </Card>
  )
}
