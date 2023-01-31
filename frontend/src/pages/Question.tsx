import React, { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import Answers from "../components/Answers";
import axios from "axios";
import { useGlobalContext } from "../context";
import { AppContextType, quizType } from "../@types/types";

const Question = () => {
  const { selectedCategory } = useGlobalContext() as AppContextType;
  console.log(selectedCategory)
  const [quiz, setQuiz] = useState<quizType[]>([]);
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://the-trivia-api.com/api/questions?limit=1&categories=${selectedCategory.categories}&difficulty=${selectedCategory.difficulty}&region=KE`
        );
    
          
          if(isMounted){
            console.log(response.data)
            setQuiz(response.data)
          }
         
        

      } catch (error: any) {
        alert(error.message)
        console.log(error.message)
      }
    };
    fetchData()
    return ()=>{isMounted = false}
  }, [selectedCategory]);
  return (
    <div className="w-[80%] h-[80%] border-2 shadow-xl shadow-slate-600 m-10 rounded-sm mx-auto ">
      {quiz.map(item=>{
        return(<>
               <Quiz  question={item.question}/>
              <Answers incorrectAnswers={item.incorrectAnswers} correctAnswer={item.correctAnswer}/>
              </>)
      })}
     
    </div>
  );
};

export default Question;
