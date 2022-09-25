import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../utils/Context";

const Home = () => {
  const {Post, setPost} = useContext(Context);
  return (
    <div className='Home' >{
      Post.length?Post.map((i)=><Link  key={i.id}  to={`/Post/${i.id}`} ><div>{i.body}</div></Link>):<div>No Posts</div>
      }</div>
  )
}

export default Home