import React from "react";

const Buttons = (props) => {
  return (
    <div className=" grid grid-rows-4 gap-0.5 w-full h-full">
      <div className=" grid grid-cols-4 bg-[#5a5959] text-[#c5b9b9] gap-0.5">
        <button className=" border" onClick={() => props.click("1")}>1</button>
        <button onClick={() => props.click("2")}>2</button>
        <button onClick={() => props.click("3")}>3</button>
        <button onClick={() => props.click("+")}>+</button>
      </div>
      <div className=" grid grid-cols-4 bg-[#5a5959] text-[#c5b9b9] gap-2">
        <button onClick={() => props.click("4")}>4</button>
        <button onClick={() => props.click("5")}>5</button>
        <button onClick={() => props.click("6")}>6</button>
        <button onClick={() => props.click("-")}>-</button>
      </div>
      <div className=" grid grid-cols-4 bg-[#5a5959] text-[#c5b9b9] gap-2">
        <button onClick={() => props.click("7")}>7</button>
        <button onClick={() => props.click("8")}>8</button>
        <button onClick={() => props.click("9")}>9</button>
        <button onClick={() => props.click("*")}>*</button>
      </div>
      <div className=" grid grid-cols-4 bg-[#5a5959] text-[#c5b9b9] gap-2">
        <button onClick={() => props.click("0")}>0</button>
        <button onClick={() => props.click(".")}>.</button>
        <button onClick={props.result}>=</button>
        <button onClick={props.clear}>C</button>
      </div>
    </div>
  );
};

export default Buttons;
