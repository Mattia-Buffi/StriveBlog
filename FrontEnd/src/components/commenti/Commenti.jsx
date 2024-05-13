import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SkeletonComment from '../../views/skeletonComponent/SkeletonComment'
import NewComment from './NewComment'
import SingleComment from './SingleComment'
export default function Commenti({comments}) {
  const [loader,setLoader]=useState(true)
  const [commentsState,setCommentsState]=useState(comments)

  return (
    <>
        <Container>
            <h3>Commenti</h3>
            {commentsState.length===0 && <h4>Nessun commento presente</h4>}
            {/* {!comments && <SkeletonComment/>} */}
            {commentsState && commentsState.map((com)=><SingleComment comment={com} setCommentsState={setCommentsState} />)}
            <NewComment setCommentsState={setCommentsState}/>
        </Container> 
    </>
  )
}
