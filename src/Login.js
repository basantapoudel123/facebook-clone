import { Button } from "@mui/material";
import React from "react";
import * as firebase from 'firebase';
import { auth, provider } from "./firebase"; 
import "./Login.css";


function Login() {
    const signIn = () => {
        // some sign in stuff....
        auth
            .signInWithPopup(provider)
            .then((result) =>{
                console.log(result);
            })
            .catch((error) => alert(error.message));
    };
    return(
    <div className="login">
        <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
            alt="" />
            <img src="https://techstory.in/wp-content/uploads/2021/03/Facebook-logo-preview.png"
            alt="" />

        </div>
        <Button type = "submit" onClick={signIn} >
            SignIn
        </Button>
    </div>
    )};

export default Login;