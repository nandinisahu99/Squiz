import { useEffect,useState } from "react";
import axios from "axios";

export default function Sques({data,setStop,setQuestionNumber,questionNumber, LevelUp, setLevelUp,username,setUsername}) {
  const [question,setQuestion]=useState(null);
  const [selectedAnswer,setSelectedAnswer]= useState(null);
  const [className, setClassName]=useState("ans");
  useEffect(async()=>{
    if(questionNumber>2){
    //   fetch("http://localhost:5000/user/select_cand",{
    //     method: "PATCH",
    //     body: JSON.stringify(username),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then(res=>res.json())
    // .then(data=>{
    //   if(data.selected){
    //     setLevelUp(true)
    //     console.log(LevelUp);
    //   }
    //   else{
    //     setStop(true);
    //   }
    //   // console.log(data);

    // })
      try{
      const {data}=await axios.patch("http://localhost:5000/")
      console.log("test",data)
      }
      catch(err){
        throw(err);
      }
    }
  },[questionNumber]);

  useEffect(()=>{
    setQuestion(data[questionNumber-1]);
  },[data,questionNumber]);

  const delay = (duration,callback) => {
    setTimeout(() =>{
      callback();
    },duration);
  };
  // const roll=123456789;
  const handleClick = (a) =>{
    setSelectedAnswer(a);
    setClassName("ans active");
    delay(150,() => 
      setClassName(()=>a.correct ? "ans correct" : "ans wrong") 
    );
    delay(900,() => 
    {  if(a.correct){
        console.log(username)
        
          setQuestionNumber((prev)=>data.length>=prev+1? prev+1: setStop(true));
        }
        else{
          setStop(true);
        } 
    }
    );
  };
  return (
    <div className="squiz">
        <div className="question">{question?.question}</div>
        <div className="answer">
          {question?.answer.map((a)=>(
          <div className={selectedAnswer === a ? className:"ans"} onClick={() => handleClick(a)}>
            {a.text}</div>))}
        </div>        
    </div>
  )
}
