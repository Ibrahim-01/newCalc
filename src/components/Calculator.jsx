import React, { useState } from 'react'
import Buttons from './Buttons';

const Calculator = () => {
    const [input, setInput] = useState('');
  
  const handleButtonClick = (value) => {
    setInput(input + value);
  };
  
  const calculateResult = () => {
    try {
      setInput(eval (input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  
  const clearInput = () => {
    setInput('');
  };
  
  return (
    <div className=" w-full h-full grid grid-rows-[2fr,4fr]">
      <div className=" bg-white w-full h-full text-right text-5xl">{input}</div>
      <Buttons result = {calculateResult} clear = {clearInput} click = {handleButtonClick}/>
    </div>
  );
};

export default Calculator;

  

