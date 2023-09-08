import React, { useEffect, useState } from 'react'
import PostComponent from '../common/PostComponent';
import Header from '../Layout/Header';

function MyPostPage(props:any) {
  console.log('MyPostPage ==>',props);
    const [myPosts,setMyposts] = useState([1,2,3,4,5,6]);

    useEffect(()=>{
        if(false){
            setMyposts([1,2,3,4,5,65,4])
        }
    },[])

const dumypostdata = {title:'post one',category:'Food',description:'thisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetrthisi smaysd faskdjfao;lkj oyou cla nm oal soolike moike opaosetr'}
  return (
    <div>
      <Header showSearch={false}></Header>
      {myPosts.map((i)=>{
        return (
            <PostComponent postData={dumypostdata}/>
        )
      })}
    </div>
  )
}

export default MyPostPage
