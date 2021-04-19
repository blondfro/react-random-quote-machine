import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteMachine from "./components/QuoteMachine";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter);

function App() {
  return (
    <div className="App">
      <QuoteMachine />
    </div>
  );
}

export default App;
