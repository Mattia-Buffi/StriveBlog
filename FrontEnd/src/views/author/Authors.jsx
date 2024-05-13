import React, { useEffect } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import AuthorCard from '../../components/author/AuthorCard'
import { API_URL } from '../../globaldata/globaldata'
import { useState } from 'react'
import { useContext } from 'react'
import { UserSetting } from '../../context/UserSettingProvider'

export default function Authors() {
  const [authorsList,setAuthorList]=useState()
  const {userSetting}=useContext(UserSetting)
  let tokenAuth='Bearer '+userSetting.token
  const downloadList = async ()=>{
    try {
      const response = await fetch(API_URL+'/authors/',{headers:{"Authorization":tokenAuth}})
      let result= await response.json();
      console.log(result)
      setAuthorList(result)
      if(response.ok){
        //feedback di avvenuto inserimento
        
    }else{
        const error = new Error(`HTTP Error! Status: ${response.status}`)
        error.response=response;
        throw error;
    }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    downloadList();
  },[])
  
  return (
    <Container>
      <h3 style={{marginTop:150}}>Lista degli autori</h3>
      <Row>
      {authorsList && authorsList.map((aut,i)=>(
        <Col
        key={`item-${i}`}
        md={4}
        style={{
          marginBottom: 50,
        }}
        >
        <AuthorCard key={aut.nome} author={aut} />
        </Col>
      ))}
      {!authorsList && <Col>
        Skeleton
      </Col>}
    </Row>
    </Container>
  )
}
