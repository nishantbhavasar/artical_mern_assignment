import React, { useState } from 'react'
import PostComponent from '../common/PostComponent';
import Header from '../Layout/Header';

function Post(props:any) {
  console.log('Post ==>',props)
    // const [post,setPost] = useState({});
    
const dumypostdata = {title:'post one',category:'Food',description:'thisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetr'}

  return (
    <div>
      <Header showSearch={false}></Header>
      <PostComponent postData={dumypostdata}/>
    </div>
  )
}

export default Post
