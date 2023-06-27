import React from "react";
import "./Time.css";
import { useState, useEffect } from "react";
const Time = () => {
  const today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [count, setCount] = useState(39);
  const [classTime, setClassTime] = useState("time");
  const [classCount, setClassCount] = useState("startcount");
  const [number, setNumber] = useState(true);
  const [cycle, setCycle] = useState(3000);
  const [pause, setPause] = useState(0);
  var num = true;
  useEffect(() => {
    const workTran = setTimeout(() => {
      //if (count == 0) clearInterval(time);
      setNumber(!number);
    }, cycle);
    // num = number;
    // console.log("check num", num);
    const time = setInterval(() => {
      if (count == 0) clearInterval(time);
      else if (pause == 0) setCount(count - 1);
      else setCount(count);
      console.log("h1");
    }, 1000);
    return () => {
      //clearInterval(workTran);
      clearInterval(time);
    };
  }, [count]);

  const handleInputCount = (e) => {
    setCount(e.target.value);
  };
  const handleInputCycle = (e) => {
    setCycle(e.target.value);
  };
  const handlePause = () => {
    setPause(1);
  };

  const handleContinue = () => {
    alert("dkdk");
    setPause(0);
    setCount(count - 1);
  };
  const [showinput, setShowinput] = useState(1);
  return (
    <>
      <button onClick={() => setShowinput(!showinput)}>
        {showinput ? "show" : "hidden"}
      </button>
      <div className={showinput ? "show" : ""}>
        <input
          style={{ color: "blue" }}
          onChange={(e) => handleInputCycle(e)}
          placeholder="Cycle"
        />

        <input
          style={{ color: "blue" }}
          onChange={(e) => handleInputCount(e)}
          placeholder="Count"
        />
      </div>
      <p>{time}</p>
      <div className={number ? classTime : "time1"}>
        <p className={classCount}>{count}</p>
      </div>
      <button onClick={() => handlePause()}>pause</button>
      <button onClick={() => handleContinue()}>Continue</button>
    </>
  );
};

export default Time;
