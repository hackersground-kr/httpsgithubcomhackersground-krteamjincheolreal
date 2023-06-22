import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './EnglishTest.css';
import PDFDownloadButton from "./makePDF";

function Submit(props) {
    return <button onClick={props.onChangeMode} className="submit1">제출</button>;
}

function Question(props) {
  const { number, value, onChange } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(number, value);
  };

  return (
    <div className="question1">
      <div className="block1">
        <h3 className="element1">문제 {number}</h3>
        <p className="word1">{value.problem}</p>
      </div>
      <div className="block1">
        <p>뜻을 입력해주세요.</p>
        <input className="inputAnswer1" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

function EnglishTest1() {
  const [questions, setQuestions] = useState([]);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Inputs:", inputs);
    {
        let cnt=0;
        for(let i=0;i<10;i++)
        {
            if(inputs[i+1]===questions[i].answer){
                cnt++;
            }
        }
        console.log(cnt);
        alert(cnt +'개 맞았습니다!');
    }
    navigate("/enter");
  };

  const handleInputChange = (questionNumber, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [questionNumber]: value,
    }));
  };

  useEffect(() => {
    const qRequest = async () => {
      const url = "https://mysql-server.azurewebsites.net/EnglishWord";
      const data = {
        first: 1,
        last : 30,
        HowMany : 10
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const fetchedQuestions = await response.json();
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    qRequest();
  }, []);

  console.log(questions);

  return (
    <div>
      <h2 className="title1">기초 영어단어 테스트</h2>

      {questions.map((question, index) => (
        <Question
          key={index}
          number={index + 1}
          value={question}
          onChange={handleInputChange}
        />
      ))}
      <div className="buttonBox1">
        <Submit onChangeMode={handleClick} />
        <PDFDownloadButton></PDFDownloadButton>
      </div>
    </div>
  );
}

export default EnglishTest1;
