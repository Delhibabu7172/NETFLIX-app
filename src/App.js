import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Profile, Signup } from './pages'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="capitalize">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
