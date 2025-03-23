import React from "react";
import { Link } from "react-router-dom";

// Import images from src/
import TomitaEnron from "./Tomitaenron.jpg";
import TomitaWiki from "./Tomitawiki.jpg";
import TomitaOverall from "./Tomitaoverall.jpg";
import ELSenron from "./ELSenron.jpg";
import ELSskitter from "./ELSskitter.jpg";
import ELSwiki from "./ELSwiki.jpg";
import ELSoverall from "./ELSoverall.jpg";
import ChibaEnron from "./Chibaenron.jpg";
import ChibaSkitter from "./Chibaskitter.jpg";
import ChibaWiki from "./Chibawiki.jpg";


const Results = () => {
  return (
    <div className="results-container">
      <header>
        <h1>Results - Graph Analysis</h1>
      </header>

      <section className="result-section">
  <h2>1. Tomita Algorithm</h2>
  <div className="image-grid">
    <img src={TomitaEnron} alt="Tomita Histogram 1" />
    <img src={TomitaWiki} alt="Tomita Histogram 3" />
    <img src={TomitaOverall} alt="Tomita Histogram 4" />
  </div>
</section>

<section className="result-section">
  <h2>2. ELS Algorithm</h2>
  <div className="image-grid">
    <img src={ELSenron} alt="ELS Histogram 1" />
    <img src={ELSskitter} alt="ELS Histogram 2" />
    <img src={ELSwiki} alt="ELS Histogram 3" />
    <img src={ELSoverall} alt="ELS Histogram 4" />
  </div>
</section>

<section className="result-section">
  <h2>3. Chiba Algorithm</h2>
  <div className="image-grid">
    <img src={ChibaEnron} alt="Chiba Histogram 1" />
    <img src={ChibaSkitter} alt="Chiba Histogram 2" />
    <img src={ChibaWiki} alt="Chiba Histogram 3" />
  </div>
</section>


      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Results;
