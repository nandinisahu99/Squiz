import {useState} from "react";
import "./app.css";
import Sques from "./components/Sques";
import Timer from "./components/Timer";
import Begin from "./components/Begin";

function App() {
  const [questionNumber, setQuestionNumber]= useState(1);
  const [stop,setStop]=useState(false);
  const [username, setUsername] =useState(null);
  const [LevelUp, setLevelUp]=useState(()=>false);

  const data=[
    {
    id: 1,
    question: "4+5",
    answer: [
      {
        text: "9",
        correct: true,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "19",
        correct: false,
      },
      {
        text: "1",
        correct: false,
      },
    ],
    },
    {
      id: 2,
      question: "78 binary conversion",
      answer: [
        {
          text: "11100",
          correct: false,
        },
        {
          text: "1100011",
          correct: true,
        },
        {
          text: "1010101",
          correct: false,
        },
        {
          text: "0001010",
          correct: false,
        },
      ],
      },
  ]
  return (
    <div className="app">
      {(username)? (
      <>
      <div className="main">
          {stop ? (<h1 className="thank">Thank you for participating</h1>) : (
            <>
              <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} LevelUp={LevelUp} setLevelUp={setLevelUp}/>
              </div>
              </div>
              <div className="bottom">
              <Sques data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} LevelUp={LevelUp} setLevelUp={setLevelUp} username={username} setUsername={setUsername}/>
              </div>
            </>
          )}
      </div>
      </>
      ) : (<Begin setUsername={setUsername} LevelUp={LevelUp} setLevelUp={setLevelUp}/>)}
    </div>
  );
}

export default App;

