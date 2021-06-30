import React from "react";
import './App.css';
import config from "./config/config"
import Questions from './components/Question/Questions';

const App = () => {

  return (
    <div className="App">
      <Questions questions={config.questions} />
    </div>
  );
}

export default App;
