import React from 'react'
import './Login.css';
import { auth } from './Firebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'


function Login() {

    const dispatch  = useDispatch();

    const [fullname ,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const register = async () =>{

        if(!fullname){
            return alert('Please enter full name!');
        }
    
      
            // createUserWithEmailAndPassword(auth,email, password)
            // .then( (userAuth) =>{
            //     updateProfile(userAuth.user, {
            //         displayName : fullname,
            //         photoURL : profilePic
            //     })

            //     dispatch(login({
            //             email : userAuth.user.email,
            //             uid : userAuth.user.uid,
            //             displayName : fullname,
            //             photoUrl : profilePic
            //     }))
            // })
            // .catch((error) =>{
            //     console.log(error.message);
            // })


            try {
                const userAuth = await createUserWithEmailAndPassword(auth,email,password);
                
                await updateProfile(userAuth.user, {
                    displayName : fullname,
                    photoURL : profilePic
                });
                
                dispatch(
                    login({
                        email : userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName :fullname,
                        photoUrl :profilePic,

                   })
                )
            }
            catch(error){
                console.log(error);
                alert(error);
            }
    }

    const loginToApp = async (e)=>{
        
       e.preventDefault();

        try {

            const userAuth = await signInWithEmailAndPassword(auth,email,password);

    
             dispatch(login({
                email : userAuth.user.email,
                uid : userAuth.user.uid,
                displayName : userAuth.user.displayName,
                profileUrl : userAuth.user.photoURL,
             }))
    
            }catch(error){
                console.log(error);
                alert(error);
            }

        // signInWithEmailAndPassword(auth, email, password)
        // .then((userAuth)=>{
        //     dispatch(login({
        //         email : userAuth.user.email,
        //         uid : userAuth.user.uid,
        //         displayName : userAuth.user.displayName,
        //         profileUrl : userAuth.user.photoURL,
        //     }));
        // })
        // .catch((error)=>{
        //     console.log(error.message);
        // })

        

       
    }

  return (
    <div className = "Login">
        <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        alt=" LinkedIn - Logo"/>
        <form>
            <input 
            value  = {fullname}
            placeholder='Full Name (required if registering)'
            type = "text"
            onChange = {e=> setName(e.target.value)}/>
            <input placeholder="Profile pic URL (Optional)" 
            value = {profilePic}
            onChange = {e => setProfilePic(e.target.value)}
            type="text"/>
            
            <input placeholder='Email'
             value = {email}
             onChange = {e => setEmail(e.target.value)}
             type="email"/>
            
            <input placeholder='Password'
             value={password}
             onChange = {e => setPassword(e.target.value)} 
             type="password"/>
            <button 
            onClick = {loginToApp}>Sign In</button>
        </form>

        <p>Not a member?
            <span className = "login__register"
            onClick = {register}
            >Register Now</span>
        </p>
    </div>
  )
}

export default Login;