import React from 'react';
import AuthPage from './pages/AuthPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import MyPostPage from './pages/MypostPage';
import PostPage from './pages/PostPage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/auth" Component={AuthPage} />
          <Route path="/" Component={HomePage} />
          <Route path="/myposts" Component={MyPostPage} />
          <Route path="/post/:id" Component={PostPage} />
        </Routes>
      </Router>
  );
}

export default App;
