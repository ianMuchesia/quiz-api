import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";
import Category from "./pages/Category";
import Question from "./pages/Question";

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <main>
        <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="Stats" element={ <Statistics />}/>
        <Route path="Category" element={ <Category />}/>
        <Route path="Question" element={ <Question />}/>
        <Route/>
        </Routes>
      </main>

     
     
    </BrowserRouter>
  );
};

export default App;
