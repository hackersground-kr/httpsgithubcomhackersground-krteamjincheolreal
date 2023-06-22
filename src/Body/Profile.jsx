import React from "react";
import { useState } from "react";
import './Profile.css';
import { useNavigate } from "react-router-dom";


function Profile(){
    const [level, setLevel] = useState("1");
    const [sum, setSum] = useState("0");
    const [math, setMath] = useState("0");
    const [en, setEn] = useState("0");
    const [sc, setSc] = useState("0");
    const [so, setSo] = useState("0");
    const [ko, setKo] = useState("0");
    const [his, setHis] = useState("0");

    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    };
    return (
      <div class="auto-group-hv7m-hFq" id="WgF327LQLFkB2EmMcjhv7M">
        <div class="auto-group-qaso-aaX" id="WgF3FBnwtJLMB4B5ZAQaSo">
          <div class="auto-group-4v3y-Mzb" id="WgF3Pw3NgUw2UQRqVJ4V3y">
            <img src='img/ms.png' class="ellipse-1-5fh" id="22:47"/>
            <div class="item--oLo" id="22:48">김마소</div>
          </div>
          <div class="pointsum-4nX" id="22:61">총합 382</div>
          <div class="subpoint-xsu" id="22:59">
            수학 32

            <br />
            영어 59

            <br />
            국어 44

            <br />
            과학 71

            <br />
            사회 75

            <br />
            역사 68
          </div>
          <button class='logout' onClick={logout}>로그아웃</button>
      </div>
      </div>
    );
}

export default Profile;