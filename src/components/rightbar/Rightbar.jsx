import React from "react";
import "./rightbar.css";
import{Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar(){
    return(
        <div className="rightbar">
          <div className="rightbarWrapper">
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
          </div>
        </div>
    )
}
    
        
    
