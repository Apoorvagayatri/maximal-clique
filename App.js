import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Overview from "./Overview";
import Algorithms from "./Algorithms";
import Results from "./Results";
import Observations from "./Observations";
import Conclusions from "./Conclusions";

const App = () => {
  // Use process.env.PUBLIC_URL for GitHub Pages
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <header>
          <h1>Maximal Clique Enumeration</h1>
          <p>Implementation and Analysis of Three Maximal Clique Algorithms</p>
        </header>

        <nav>
          <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/algorithms">Algorithms</Link></li>
            <li><Link to="/observations">Observations</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/conclusions">Conclusions</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Home Page (Default) */}
          <Route path="/" element={
            <section className="content">
              <h2>About the Project</h2>
              <p>
                This project implements three different maximal clique enumeration algorithms and compares their performance on various graph datasets.
              </p>
              <p>
                Explore our implementation, datasets, results, and insights through the navigation above.
              </p>
            </section>
          } />
          
          {/* Other Pages */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/results" element={<Results />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/conclusions" element={<Conclusions />} />
        </Routes>

        <footer>
          <p>Project by Group 44</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
