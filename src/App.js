import './App.css';
import React from 'react';
import { TodoWrapper } from './components/ToDoWrapper';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Advice from './components/Advice';

function App() {
  return (
    <Router>
      <div className="App">
        <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoWrapper />}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/advice" element={<Advice/>}/>

        </Routes>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;