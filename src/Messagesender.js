import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function MessageSender() {
    const[input, setInput] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // some clever db stuff

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messagesender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder="What's on your Mind?" />
                    
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image url(optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>

    );
}

export default MessageSender;