import React from "react";
import "./Feed.css";
import StoryReel from "./Storyreel";
import MessageSender from "./Messagesender";
import Post from "./Post";

function Feed() {
    return <div className="feed">
        < StoryReel />
        < MessageSender />

        < Post 
            ProfilePic="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/s206x206/91287273_666923697459090_2321113499146649600_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=EsAo6BPEgEgAX_5UUqf&_nc_ht=scontent.fktm8-1.fna&oh=bb1fbf2322a481e176a0c55db3bf3b1c&oe=617B374E"
            message="Wow this works...."
            timestamp="This is a timestamp"
            username="Basanta123"
            image="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/117616135_2794347434135926_8126314728325893366_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SCEGv4u03ikAX-9-P1u&tn=dzpR7pdiiF1fgyNw&_nc_ht=scontent.fktm8-1.fna&oh=c6d9a0c0e8670545bb4cb80d2c38b65a&oe=617BF89F"
            />
        < Post />
        < Post />
    </div>
};
export default Feed;