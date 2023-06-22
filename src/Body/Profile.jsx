import React from "react";
import { useState } from "react";
import './Profile.css';


function Profile(){
    const [level, setLevel] = useState("1");
    const [sum, setSum] = useState("0");
    const [math, setMath] = useState("0");
    const [en, setEn] = useState("0");
    const [sc, setSc] = useState("0");
    const [so, setSo] = useState("0");
    const [ko, setKo] = useState("0");
    const [his, setHis] = useState("0");
    return (
        <div className='box'>
            <div className='profile'>
                <img className='photo' src='img/basic.png'/>
            </div>
            <div className='info'>
                <p>Lv.{level}</p>
                <p>이름 : 곽두팔</p>
                <p>종합 스탯 : {sum}</p>
                <text>수학 스탯 : {math}</text><br></br>
                <text>영어 스탯 : {en}</text><br></br>
                <text>과학 스탯 : {sc}</text><br></br>
                <text>사회 스탯 : {so}</text><br></br>
                <text>국어 스탯 : {ko}</text><br></br>
                <text>역사 스탯 : {his}</text><br></br>
            </div>
        </div>
    );
}

export default Profile;