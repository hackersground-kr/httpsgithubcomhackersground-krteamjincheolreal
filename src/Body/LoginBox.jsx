import React from "react";
import './LoginBox.css';
import { useState } from "react";

function Login(props){
    return (
        <div class='loginButtonBox'>
            <button class='login' onClick={props.onChangeMode}>Login</button>
        </div>
    );
}

function LoginBox(){
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const [response, setResponse] = useState('');

    const handleLogin = async() => {
        console.log(idValue);
        console.log(pwValue);
        try {
            const url = 'https://mysql-server.azurewebsites.net/login';
            const data = { id: {idValue}, pw: {pwValue} };
            console.log('1');
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            console.log('2');
      
            const responseData = await response.json();
            console.log('3');
            setResponse(responseData);
            console.log('4');
            console.log(response);
          } catch (error) {
            console.error('Error:', error);
          }
    };

    return (
        <div className='LoginBox'>
            <h1 className='Text'>Welcome!</h1>
            <div className='inputBox'>
                <div className='info'>
                    <text className='text'>ID</text>
                    <input type='text' value={idValue} onChange={(e) => setIdValue(e.target.value)} class='inputField' id='idText'></input>
                </div>
                <div className='info'>
                    <text className='text'>password</text>
                    <input type='text' value={pwValue} onChange={(e) => setPwValue(e.target.value)} class='inputField' id='passwordText'></input>
                </div>
                <Login onChangeMode={handleLogin}></Login>
            </div>
        </div>
    );
}

export default LoginBox;