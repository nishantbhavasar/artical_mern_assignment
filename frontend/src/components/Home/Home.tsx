import React from 'react'
import Header from '../Layout/Header'

function Home(props:any) {
  console.log('home ==>',props);
  return (
    <div>
      <Header showSearch={true}></Header>
    </div>
  )
}

export default Home
