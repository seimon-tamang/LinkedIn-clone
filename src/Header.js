import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();
  
  const user = useSelector(selectUser);

  const logoutOfApp = ()=>{

    dispatch(logout());
    signOut(auth);
  }

  return (
    <div className="header">
      <div className="header_left">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055' alt=""/>
            <div className="header_search">
                <SearchIcon/>
                <input type="text"/>
            </div>
      </div>

      <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption 
            avatar = {user?.photoUrl}
            title={user?.displayName}
            onClick = {logoutOfApp}
            />
      </div>
    </div>
  )
}

export default Header