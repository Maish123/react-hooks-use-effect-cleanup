import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("hi")
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);
  console.log("bye")

  return <div>{time.toString()}</div>;
}

export default Clock;
