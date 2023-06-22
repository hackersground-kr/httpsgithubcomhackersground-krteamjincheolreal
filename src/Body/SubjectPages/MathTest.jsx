import React from "react";
import { useNavigate } from "react-router-dom";

function Subject(props){

    const subjectStyle = {
        backgroundColor: props.color,
    };

    const navigate = useNavigate();

    const sachikClick = (check, name) => {
        {check ? navigate('/enter/study/math') : navigate('/enter/test/math/sachick')}
    };

    const bangClick = (check, name) => {
        {check ? navigate('/enter/study/math') : navigate('/enter/test/math/bang')}
    };

    const handleClick = (check, name) => {
        {
            if(name==='사칙연산')
            {
                sachikClick();
            }
            else if(name==='방정식')
            {
                bangClick();
            }
            else if(name==='2222')
            {

            }
        }
    };

    return (
        <button className='subject' style={subjectStyle} onClick={() => handleClick(props.isTested, props.name)}>
            <h2 className='subjectName'>{props.name}</h2>
            {props.isTested ? (
                <p className="state">{props.name} 공부하러 가기</p>
            ) : (
                <p className="state">{props.name} 테스트 보러가기</p>
            )}
        </button>
        //{ canStudy ?  <MathStudy></MathStudy>: <MathTest></MathTest> }
    );
}

function MathTest(){
    return (
        <div className='subjectBox'>
        <Subject name='사칙연산' isTested={false} color='rgb(27, 150, 212)'></Subject>
        <Subject name='방정식' isTested={false} color='rgb(241, 241, 24)'></Subject>
        <Subject name='2222' isTested={false} color='rgb(134, 224, 66)'></Subject>
    </div>
    );
}

export default MathTest;