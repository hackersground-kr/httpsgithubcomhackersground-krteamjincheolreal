import React from "react";
import './LoginBox2.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props){
    return (
        <button class="loginbutton-qSK" id="3:16" onClick={props.onChangeMode}>Login</button>
    );
}

function LoginBox2({onLogin}){
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");
    const [responseText, setResponseText] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/enter');
    };

    const handleLogin = async() => {
        console.log(idValue);
        console.log(pwValue);

      const url = "https://mysql-server.azurewebsites.net/login";
      const data = {
        id: idValue,
        pw: pwValue
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

            const responseData = await response.json();
            setResponseText(responseData);
            console.log(responseData.message);
            if (responseData.message=="true") {
                handleClick();
              }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div class='BOX'>
            <div class="input-5Es" id="3:21">
                <div class="auto-group-bexb-Njm" id="Gf6W34ey19YZxmk4e7BExB">
                <input
                    type="text"
                    class="id-sRd"
                    id="3:19"
                    placeholder="아이디 또는 이메일"
                    value={idValue} onChange={(e) => setIdValue(e.target.value)}
                />
                <input
                    type="password"
                    class="id-sRd"
                    id="3:19"
                    placeholder="비밀번호"
                    value={pwValue} onChange={(e) => setPwValue(e.target.value)}
                />
                <div class="dd-N11" id="7:5">
                    <span class="dd-N11-sub-0">아직 계정이 없으시다면? </span>
                    <span class="dd-N11-sub-1">회원가입</span>
                </div>
                <Login onChangeMode={handleLogin}></Login>
                </div>
                <div class="line-1-TTh" id="7:26"></div>
                <div class="google-CAP" id="7:21">
                <img class="image-1-iPd" src="img/google.png" id="7:30" />
                <div class="dd-eHH" id="7:28">Google 로그인</div>
                </div>
            </div>
        </div>
    );
}

export default LoginBox2;