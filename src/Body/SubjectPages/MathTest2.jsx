import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Submit(props) {
  return <button onClick={props.onChangeMode}>제출</button>;
}

function Question(props) {
  const { number, value, onChange } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(number, value);
  };

  return (
    <div>
      <h3>문제 {number}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.problem}</h3>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

function MathTest2() {
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
      const url = "https://mysql-server.azurewebsites.net/bang";
      const data = {
        degree: 7,
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
      <h2>방정식 테스트</h2>
      {questions.map((question, index) => (
        <Question
          key={index}
          number={index + 1}
          value={question}
          onChange={handleInputChange}
        />
      ))}
      <Submit onChangeMode={handleClick} />
    </div>
  );
}

export default MathTest2;
