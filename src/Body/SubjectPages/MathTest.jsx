import React from "react";
import { useNavigate } from "react-router-dom";

function Subject(props){

    const subjectStyle = {
        backgroundColor: props.color,
    };

    const navigate = useNavigate();


    const mathStudyClick = (check, name) => {
        navigate('/enter/study/math')
    };

    const sachikClick = (check, name) => {
        {check ? navigate('/enter/study/math') : navigate('/enter/test/math/sachick')}
    };

    const bangClick = (check, name) => {
        {check ? navigate('/enter/study/math') : navigate('/enter/test/math/bang')}
    };

    const handleClick = (check, name) => {
        {
            if(name=='수학'){
                mathStudyClick();
            }
            else if(name==='사칙연산')
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
            <h2 className='subjectName'>{props.name}공부 하러가기</h2>
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
        <Subject name='수학' isTested={true} color='#f7c9cb'></Subject>
        <Subject name='사칙연산' isTested={false} color='#f7c9cb'></Subject>
        <Subject name='방정식' isTested={false} color='#f7c9cb'></Subject>
        <Subject name='연립방정식' isTested={false} color='#f7c9cb'></Subject>
    </div>
    );
}

export default MathTest;