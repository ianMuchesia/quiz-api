import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <main>
        <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="Stats" element={ <Statistics />}/>
        <Route/>
        </Routes>
      </main>

     
     
    </BrowserRouter>
  );
};

export default App;
