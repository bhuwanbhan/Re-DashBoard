import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser(){
    const navigate = useNavigate();
  
    const getToken = () =>{
        const   tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }
    const getUser = () =>{
        const   tokenString = sessionStorage.getItem('user');
        const user_details= JSON.parse(tokenString);
        return user_details;
    }


    const[token, setToken] = useState(getToken());
    const[user, setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token))
        sessionStorage.setItem('user',JSON.stringify(user))

        setToken(token);
        setUser(user);
        navigate('/otp')
    }
    const https=  axios.create({
        baseURL: "http://localhost:8000/api/users",

        headers:{
            "content-type":  "application/json"

        }

    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
       
        
    }
}