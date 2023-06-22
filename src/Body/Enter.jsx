import React from "react";
import Profile from "./Profile";
import './Enter.css';
import Education from "./Education";
import { useState } from "react";
import MathTest from "./SubjectPages/MathTest";

function Enter(){
    const [subjectId, setSubjectId] = useState(true);

    const handlePage = () => {
        setSubjectId(!subjectId);
    };

    return (
        <div className="window">
            <div className='profileBar'>
                <Profile></Profile>
            </div>
            <div className='contents'>
                <div class='element'>
                    {subjectId && <Education />}
                    {!subjectId && <MathTest />}
                </div>
            </div>
        </div>
    );
}

export default Enter;