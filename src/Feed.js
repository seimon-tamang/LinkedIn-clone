import React, { useState,useEffect} from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import Post from "./Post"
import FlipMove from 'react-flip-move';
import {
    doc,
    onSnapshot,
    snapshot,
    addDoc,
    updateDoc,
    collection,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy
} from "firebase/firestore";
import {db,auth} from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
 const user = useSelector(selectUser);
 const [input, setInput] = useState("")
 const [posts, setPosts] = useState([]);

 const postsRef = collection(db, "posts");
 const q = query(postsRef, orderBy("timestamp","desc"));

 useEffect(()=>{

    //real time collection data from the database.
    onSnapshot(q,(snapshot)=>{
        let postArray=[]
        snapshot.docs.forEach((doc)=>(
            postArray.push({...doc.data(), id:doc.id}) )
        )
        setPosts([...posts,...postArray]);
        
    })


 },[])
 
 const sendPost = (e)=>{
    e.preventDefault();

    addDoc(postsRef,{
        name:user.displayName,
        description: user.email,
        message:input,
        photoUrl:user.photoUrl || "",
        timestamp:serverTimestamp(),
    })

    setInput('');
    
 }

  return (
    <div className="feed"> 
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" 
                    value={input} 
                    placeholder='Start a post'
                    onChange={(e)=>setInput(e.target.value)}
                />
                    <button onClick= {sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption 
                    Icon={ImageIcon} 
                    title="Photo" 
                    color="#70b5f9"
                />
                <InputOption
                    Icon={SubscriptionsIcon}
                    title="Video"
                    color="green"
                />

                <InputOption
                    Icon={CalendarViewDayIcon}
                    title="Event"
                    color="orange"
                />

                <InputOption
                    Icon={ArticleIcon}
                    title="Article"
                    color="red"
                />
            </div>
        </div>
        <FlipMove>
        {
            
            posts.map(
               ({id,name,description,message,photoUrl}
               )=>(
                   <Post 
                   key={id}
                   name={name}
                   description={description}
                   message={message}
                   photoUrl = {photoUrl}
                   />
           )
           )
       }
        </FlipMove>
        

        

    </div>
  )
}

export default Feed