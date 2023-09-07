import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar.js"
import Feed from "./Feed"
import { selectUser } from './features/userSlice';
import { useSelector, useDispatch } from "react-redux";
import Login from './Login'
import {auth} from './Firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { login,logout } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
      onAuthStateChanged(auth, (userAuth)=>{
        if(userAuth){
          //user is logged in
          dispatch(login({
            email : userAuth.email,
            uid : userAuth.uid,
            displayName : userAuth.displayName,
            photoUrl : userAuth.photoURL,
          }))
        }
        else{
          //user is logged out.
          dispatch(logout());
        }
      })
  },[dispatch])
  

  return (
    <div className="App">
      <Header/>

       {!user ?(
         <Login/>
         ):
        (
        <div className="appBody">
        <Sidebar/>
        <Feed/>
        </div>
        )}
       
         
        
      
     
    </div>
  );
}

export default App;
