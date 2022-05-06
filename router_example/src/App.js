import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Home from './Home.js';
import About from './About.js';
import Dashboard from './Dashboard.js'
import NoMatch from './NoMatch';
import './App.css';
export default function App() {
  return (
    <div className="app">
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

