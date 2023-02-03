import React, { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import Answers from "../components/Answers";
import axios from "axios";
import { useGlobalContext } from "../context";
import { AppContextType, quizType, question } from "../@types/types";

const Question = () => {
  const { selectedCategory } = useGlobalContext() as AppContextType;

  const [quiz, setQuiz] = useState<quizType[]>([]);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/v1/quiz`);

        if (isMounted) {
          console.log(data);
          setQuiz(data.msg);
        }
      } catch (error: any) {
        alert(error.message);
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  //next question
  const handleNext = () => {
    if (questionIndex === quiz[categoryIndex]?.question.length - 1) {
      setQuestionIndex(0);
    } else {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    }
  };
  //previous catgory
  const handlePrevious = () => {
    if (questionIndex === 0) {
      setQuestionIndex(quiz[categoryIndex]?.question.length - 1);
    } else {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
    }
  };

  const renderQuestion = () => {
    if (quiz[categoryIndex]?.question[questionIndex] !== undefined) {
      return (
        <>
          <Quiz
            question={quiz[categoryIndex]?.question[questionIndex].question}
            questions={quiz[categoryIndex]?.question}
            questionIndex={questionIndex}
          />
          <Answers
            incorrectAnswers={
              quiz[categoryIndex]?.question[questionIndex].incorrectAnswers
            }
            correctAnswer={
              quiz[categoryIndex]?.question[questionIndex].correctAnswer
            }
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            setQuestionIndex={setQuestionIndex}
          />
        </>
      );
    }
  };

  return (
    <div className="w-[80%] h-[80%] border-2 shadow-xl shadow-slate-600 m-10 rounded-sm mx-auto ">
      {renderQuestion()}
    </div>
  );
};

export default Question;
