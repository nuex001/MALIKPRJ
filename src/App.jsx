import { useState } from "react";
import "./App.css";
import Home from "./page/Home";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import UxCase from "./page/UxCase";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      <Routes>
      <Route exact path="/*" element={<Home />}/>
      <Route exact path="/uxcase" element={<UxCase />}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
