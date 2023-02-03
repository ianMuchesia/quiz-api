import React, { useEffect, useState } from "react";
import shuffle from "../utils";
interface Props {
  incorrectAnswers: string[];
  correctAnswer: string;
  handleNext: () => void;
  handlePrevious: () => void;
  setQuestionIndex: (value: React.SetStateAction<number>) => void;
}


const Answers = ({
  incorrectAnswers,
  correctAnswer,
  handleNext,
  handlePrevious,
}: Props) => {

  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [multipleChoice, setMultipleChoice] = useState(shuffle([...incorrectAnswers,correctAnswer]))


  useEffect(()=>{
    let isMounted= false;
    if(isMounted){
     
    }
    return ()=>{isMounted = true}
      
    

  }, [selectedAnswer])
  
    //console.log(selectedAnswer)
    const handleClick = (e: any) => {
      setSelectedAnswer(e.target.dataset.value) 
      console.log(selectedAnswer)
      console.log(correctAnswer) 
      console.log(multipleChoice)
      if(selectedAnswer == correctAnswer){
        
        alert("correct");
        handleNext();
      }else{
        alert("wrong")
      }
    };
  //console.log(correctAnswer);
  return (
    <div>
      <div className="grid gap-3 p-10 place-items-center">
        <div
          className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer"
          onClick={handleClick}
          data-value={multipleChoice[0]}
        >
          <span  onClick={(e)=>{e.stopPropagation();}} className="bg-blue-900  py-2 px-3 text-white rounded-full">
            A
          </span>
          <h5>{multipleChoice[0]}</h5>
        </div>
        <div
          className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer"
          onClick={handleClick}
          data-value={multipleChoice[1]}
        >
          <div className="bg-blue-900  py-2 px-3 text-white rounded-full">
            B
          </div>
          <h5>{multipleChoice[1]}</h5>
        </div>
        <div
          className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer"
          onClick={handleClick}
          data-value={multipleChoice[2]}
        >
          <div className="bg-blue-900  py-2 px-3 text-white rounded-full">
            C
          </div>
          <h5>{multipleChoice[2]}</h5>
        </div>
        <div
          className=" w-[200px] lg:w-[400px] border-2 bg-white rounded-lg p-4 hover:bg-blue-400 flex items-center gap-4 cursor-pointer"
          onClick={handleClick}
          data-value={multipleChoice[3]}
        >
          <div className="bg-blue-900  py-2 px-3 text-white rounded-full">
            D
          </div>
          <h5>{multipleChoice[3]}</h5>
        </div>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={handlePrevious}
          className="bg-blue-400 hover:bg-white px-6 py-3 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-400 hover:bg-white px-6 py-3 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Answers;
