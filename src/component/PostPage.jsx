import React, { useContext , useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../utils/Context";
import Missing from './Missing';
 
const PostPage = () => {
  
  let usenav = useNavigate();
      
  const paramz = useParams();
  const {Post, setPost} = useContext(Context);
  return (
    <div>
  {
    (Post.some((i)=>i.id==paramz.id))?<div>{Post.find((i)=>i.id==paramz.id).body}<button onClick={()=>{setPost(Post.filter((i)=>i.id!=paramz.id));usenav('/')}} >delete</button></div>:<Missing />
  } 
    </div>
  )
}

export default PostPage