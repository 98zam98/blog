import React, { useContext , useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../utils/Context";

const NewPost = () => {
  const {Post, setPost} = useContext(Context);  
  const [chbtn, setchbtn] = React.useState((x)=>{
    x=0;
    for(let i in Post)
    {
      if(Post[i].id>x)
        x=Post[i].id;
    }
    return x;
  });
  const [NewPost, setNewPost] = useState('');
  return (
    <div className="ADD">
    <form>
      <input
        className="fin"
        type={"text"}
        value={NewPost}
        placeholder="NewPost"
        onChange={(e) => {
          setNewPost(e.target.value);
        }}
      />
    </form>
    <div
      className="ADDbtn"
      onClick={() =>
        setchbtn((x) => {
          if (NewPost != "") 
          {
            x++;
            setPost([
              ...Post,
              { id: x, body: NewPost}
            ]);
            setNewPost("");
          }
          return x;
        })
      }
    >
      ADD
    </div>
  </div>

  )
}

export default NewPost