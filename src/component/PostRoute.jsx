import { Route , Routes } from "react-router-dom";
import { Context } from "../utils/Context";
import {NewPost,PostPage} from "./";
import React, { useContext, useEffect, useState } from 'react'

const PostRoute = () => {
  
  const {Post, setPost} = useContext(Context);
  return (
    <Routes>
        <Route>
          <Route index element={<Context.Provider value={{Post, setPost}} ><NewPost /></Context.Provider>}  />
          <Route path=':id' element={<Context.Provider value={{Post, setPost}} ><PostPage /></Context.Provider>}  />
        </Route>
    </Routes>
  )
}

export default PostRoute