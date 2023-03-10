import React, { useState } from "react";
import "./post.css";
import {MoreVert} from "@material-ui/icons";
import { Users } from "../../dummyData";
export default function Post({post}){

    const[like,setLike] = useState(post.like)
    const[isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = ()=>{
        setLike(isLiked  ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    // const user =  Users.filter(u=>u.id===1)
    // console.log(user[0].username)
    return(
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon"src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon"src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} peoples like it</span>
                    
                </div>
                <div className="postBottomRight">
                    <div className="postCommentsText">{post.comment}comments</div>
                </div>
            </div>
          </div>
        </div>
    )
}
    
        
    
