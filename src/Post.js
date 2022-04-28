import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined } from "@mui/icons-material";
import NearMeIcon from '@mui/icons-material/NearMe';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Post({ ProfilePic, image, username, timestamp, message }) {
    return (

    <div className="post">
         <div className="post_top">
             <Avatar src={ProfilePic} className="post_avatar" />
             <div className="post_topinfo">
                 <h3>{username}</h3>
                 <p>Timetamp...</p>
             </div>
        </div> 

        <div className="post_bottom">
            <p>{message}</p>
        </div>

        <div className="post_image">
            <img src={image} alt= "" />
        </div>

        <div className="post_options">
            <div className="post_option">
                <ThumbUpIcon />
                <p>Like</p>
            </div>

            <div className="post_option">
                <ChatBubbleOutline />
                <p>Comment</p>
            </div>

            <div className="post_option">
                <NearMeIcon />
                <p>Share</p>
            </div>

            <div className="post_option">
                <AccountCircle />
                <ExpandMoreOutlined />
            </div>
        </div>
    </div>
    )};

export default Post;