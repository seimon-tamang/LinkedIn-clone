import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
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
            <HeaderOption avatar="https://lh3.googleusercontent.com/613ZJsFSLqsKGpht8qxr1FezBeXfUPTWzYVrgq1r8909bugRlvkBPuTTBXs6q8oQ_dWn8j89Zzqu_1bjB1NrV2-wCIgCNexTdwOG4DeS0Sa_OM0=w960-rj-l80-nu-e365" title="me"/>
      </div>
    </div>
  )
}

export default Header