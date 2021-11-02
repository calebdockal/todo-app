import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
