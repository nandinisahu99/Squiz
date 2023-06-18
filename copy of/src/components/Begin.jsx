import { useRef } from "react";
export default function Begin({setUsername, LevelUp, setLevelUp}) {
    const inputRef = useRef();
    const rollRef = useRef();
    const passwordRef = useRef();

    const handleClick=()=>{
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    // const handleClick1=()=>{
    //     if(rollRef.current.value!="" && passwordRef.current.value!="")
    //     {
    //       const login={
    //         roll:rollRef.current.value,
    //         password:passwordRef.current.value
    //       }
    //       fetch("http://localhost:5000/user/login", {
    //         method: "POST",
    //         body: JSON.stringify(login),
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     }).then(res=>res.json())
    //     .then(data=>{
    //       console.log(data);

    //     })
    //     }
    // };
  return (
        <div className="Start">
        <input placeholder ="Enter your RollNumber" className="startInput" ref={inputRef}/>
        <button className="Statbutton" onClick={handleClick}>Start - Level 1</button>
        </div>
  )
}
    // <div>
    //   { (Level===1) ? (
    //     <div className="Start">
    //     <input placeholder ="Enter your RollNumber" className="startInput" ref={inputRef}/>
    //     <button className="Statbutton" onClick={handleClick}>Start - Level 1</button>
    //     </div>):(
    //     <div className="Level">
    //       <input placeholder ="Enter your RollNumber" className="LevelInput" ref={rollRef}/>
    //       <input placeholder ="Enter your Password" className="Password" ref={passwordRef}/>

    //       <button className="Button" onClick={handleClick1}>Start - Level 2</button>
    //     </div>
    //     )
    //   }
    // </div>
//}

