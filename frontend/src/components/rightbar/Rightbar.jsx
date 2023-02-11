import React from "react";
import "./rightbar.css";
import{Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({user}){
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = ()=>{
    return(
      <>
       <div className="birthdayContainer">
              <img className="birthdayImg" src="/assets/gift.png" alt="" />
              <span className="birthdayText"><b>Pola foster</b> and <b>3 other friends</b> have birthday today</span>
            </div>
            <img className="rightbarAd"src="/assets/ad.jpg" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ui className="rightbarFriendList">
              {Users.map(u=>(
                <Online key ={u.id} user = {u} />
              ))}
            </ui>
      </>
    );
  };
  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lakshan</span>
          </div>
        </div>
        </>
    )
  }
    return(
        <div className="rightbar">
          <div className="rightbarWrapper">
           { user ? <ProfileRightbar/> : <HomeRightbar/>}
          </div>
        </div>
    );
}
    
        
    
