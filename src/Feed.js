import React from "react";
import './Feed.css'
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className='feed'>
            <MessageSender/>
            <Post profilePic='https://avatars.githubusercontent.com/u/32813584?s=400&v=4'
                  message="First Post"
                  timestamp='sample timestamp'
                  username='tailorsmit'
                  image='https://miro.medium.com/max/581/1*VTLrd3kMK8NSo5XSNMWkBQ.png'/>
            <Post profilePic='https://avatars.githubusercontent.com/u/32813584?s=400&v=4'
                  message="Second Post"
                  timestamp='sample timestamp'
                  username='tailorsmit'/>
            <Post profilePic='https://avatars.githubusercontent.com/u/32813584?s=400&v=4'
                  message="Third Post"
                  timestamp='sample timestamp'
                  username='tailorsmit'/>

        </div>
    )
}

export default Feed;