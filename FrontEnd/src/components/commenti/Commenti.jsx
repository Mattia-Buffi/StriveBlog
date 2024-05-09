import React from 'react'
import { Container } from 'react-bootstrap'
import SkeletonComment from '../../views/skeletonComponent/SkeletonComment'
import NewComment from './NewComment'

export default function Commenti() {

  
  return (
    <>
        <Container>
            <h3>Commenti</h3>
            <SkeletonComment/>
            <SkeletonComment/>
            <NewComment/>
        </Container> 
    </>
  )
}
