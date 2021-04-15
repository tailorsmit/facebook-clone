import React from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe} from "@material-ui/icons";

function Post({profilePic,image,username,timestamp,message}){
    return (
        <div className='post'>
            <div className='post__top' >
                <Avatar src={profilePic} className='post__avatar' />
                <div className='post__topinfo' >
                    <h3>{username}</h3>
                    <p>timestamp...</p>
                </div>
            </div>

            <div className='post__bottom' >
                <p>{message}</p>
            </div>

            <div className='post__image' >
                <img src={image} alt=''/>
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;