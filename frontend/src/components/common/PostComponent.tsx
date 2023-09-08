import { Container } from '@mui/material'
import React from 'react'

type postDataType = {title:string,category:string,description:string}

function PostComponent({postData}:{postData:postDataType}) {
  return (
    <Container style={{padding:'20px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <h1 style={{textTransform:'capitalize',paddingBlock:'10px'}}>{postData.title}</h1>
        <h3 style={{textTransform:'capitalize',color:'gray'}}>{"Category : "+postData.category}</h3>
      </div>
      <p>{postData.description}</p>
    </Container>
  )
}

export default PostComponent
