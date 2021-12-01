import React from 'react'
import { Routes, Route } from "react-router-dom";
import CreateLink from './addUser';
import User from './User';
import Post from './posts';
const Body = () => {
    return (
    
        <Routes>
          <Route exact path="/User" element={<User/>}/>
          <Route exact path="/AddUser" element={<CreateLink/>}/>
          <Route exact path="/posts" element={<Post/>}/>
        </Routes>

    )
}

export default Body