import React from "react";
import "./register.css";
 export default function Register(){
    return(
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">SmartSocial</h3>
                    <span className="registerDesc">Connect with your friends and the world around you on SmartSocial.</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="User Name" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Confirm Password" className="registerInput" />
                        <button className="registerButton">Sing Up</button>
                        <button className="registerRegisterButton">Log to Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
 }