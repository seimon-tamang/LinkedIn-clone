import React from 'react'
import "./Sidebar.css"
import  {Avatar}  from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);


  const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
  )

  return (
    <div className="sidebar">

        <div className="sidebar_top">
            <img src="https://images.pexels.com/photos/1876790/pexels-photo-1876790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg_pp"/>
            <Avatar 
                src = {user.photoUrl}
                //https://lh3.googleusercontent.com/613ZJsFSLqsKGpht8qxr1FezBeXfUPTWzYVrgq1r8909bugRlvkBPuTTBXs6q8oQ_dWn8j89Zzqu_1bjB1NrV2-wCIgCNexTdwOG4DeS0Sa_OM0=w960-rj-l80-nu-e365
                className="sidebar_avatar"    
            />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,534</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar_statNumber">2,200</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("ReactJS")}
            {recentItem("Programming")}
            {recentItem("softwareengineering")}
            {recentItem("developer")}
        </div>

    </div>
  )
}

export default Sidebar