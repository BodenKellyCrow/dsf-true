
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Login Page</div>} />
        <Route path="/explore" element={<div>Explore Page</div>} />
        <Route path="/create" element={<div>Create New Project</div>} />
        <Route path="/project/:id" element={<div>Single Project Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
