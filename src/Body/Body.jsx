import React from "react";
import LoginBox from './LoginBox'
import Enter from "./Enter";
import LoginBox2 from "./LoginBox2";
import './Body.css';
import { useState } from "react";

function Body(){
    const [isLogined, setIsLogined] = useState(false);

    const handleLogin = () => {
        setIsLogined(true);
    };

    return (
        <div class='element'>
            {isLogined ? <Enter></Enter> : <LoginBox2 onLogin={handleLogin}></LoginBox2>}
        </div>
    );
}

export default Body;