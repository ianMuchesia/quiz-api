import React, { useState } from "react";
interface Props {
  incorrectAnswers: string[];
  correctAnswer: string;
}

const incorrectAnswers = ({ incorrectAnswers, correctAnswer }: Props) => {
  const randomAnswerChoice = () => {
    return Math.floor(Math.random() * 4);
  };

  const handleClick=(e: any)=>{
    if((e.target.innerText).slice(0) === correctAnswer){
      alert("correct")

    }else{
      alert("wrong answer")
    }
    
  }
  console.log();
  return (
    <div>
    <ul className="grid gap-3 p-10 place-items-center">
      <li
        className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="bg-blue-900  py-2 px-3 text-white rounded-full">A</div>
        <h5>{[...incorrectAnswers, correctAnswer][randomAnswerChoice()]}</h5>
      </li>
      <li className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer" onClick={handleClick}>
        <div className="bg-blue-900  py-2 px-3 text-white rounded-full">B</div>
        <h5>{[...incorrectAnswers, correctAnswer][randomAnswerChoice()]}</h5>
      </li>
      <li className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer" onClick={handleClick}>
        <div className="bg-blue-900  py-2 px-3 text-white rounded-full">C</div>
        <h5>{[...incorrectAnswers, correctAnswer][randomAnswerChoice()]}</h5>
      </li>
      <li className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer" onClick={handleClick}>
        <div className="bg-blue-900  py-2 px-3 text-white rounded-full">D</div>
        <h5>{[...incorrectAnswers, correctAnswer][randomAnswerChoice()]}</h5>
      </li>
    </ul>
    <div>
      <button>Previous</button>
      <button>Next</button>
    </div>
    </div>
  );
};

export default incorrectAnswers;
