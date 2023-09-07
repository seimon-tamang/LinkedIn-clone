import React, {forwardRef} from 'react'
import "./Post.css"
import InputOption from './InputOption';
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div  className="post">
        <div className="post_header">
             <Avatar src = {photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                 
                <h2>{name}</h2>
                <p>{description}</p>
            </div> 
        </div>
        <div className="post_body">
                <p>{message}</p>
        </div>

        <div className="post_button">
            <InputOption Icon={ThumbUpOffAltIcon} 
            title="Like"
            color="grey"/>

            <InputOption Icon={CommentIcon} 
            title="Comment"
            color="grey"/>

            <InputOption Icon={RepeatIcon} 
            title="Repost"
            color="grey"/>

            < InputOption Icon={SendIcon} 
            title="Share"
            color="grey"/>
        </div>
        
    </div>
  )
}

export default Post