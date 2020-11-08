import React, { useEffect, useState } from "react";
import Clock from "react-clock";

import { TimeWrapper } from "./style";
import "react-clock/dist/Clock.css";

const Option = ({ index, hours, mins, submitHandler }) => {
  return (
    <div>
      <div id={index} onClick={submitHandler} className="option">
        {("0" + hours).slice(-2)} : {("0" + mins).slice(-2)}
      </div>
    </div>
  );
};

export const Time = () => {
  const [value, setValue] = useState(new Date());
  const tp = [1, 1, 1, 1];
  const times = tp.map((a, index) => {
    return new Date(
      Math.floor(Math.random() * 43200000 + (86400000 + 3600000 - 19800000))
    );
  });
  const correctAns = Math.floor(Math.random() * 4);
  console.log(times);
  console.log(correctAns);
  console.log(times[correctAns]);

  const submitHandler = (event) => {
    console.log(event);
    document.getElementById(event.target.id).style.backgroundColor = "red";
    document.getElementById(correctAns).style.backgroundColor = "green";
  };
  return (
    <div>
      <TimeWrapper>
        <div class="time">
          <span style={{ fontSize: "1.45em" }}>Clock</span>
          <div className="clock">
            <Clock
              renderNumbers={true}
              secondHandWidth={0}
              value={times[correctAns]}
            />
          </div>
          <div className="option-container">
            {times.map((time, index) => {
              return (
                <Option
                  hours={time.getHours()}
                  mins={time.getMinutes()}
                  index={index}
                  key={index}
                  submitHandler={submitHandler}
                />
              );
            })}
          </div>
        </div>
      </TimeWrapper>
    </div>
  );
};
