import React from 'react';
import AuthPage from './pages/AuthPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/auth" Component={AuthPage} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </Router>
  );
}

export default App;
