import React from "react";
import "./Conclusions.css";

const Conclusions = () => {
  return (
    <div className="conclusions-container">
      <h2>Conclusions</h2>
      
      <section>
        <h3>Algorithm Performance Comparison</h3>
        <p>
          After analyzing the three maximal clique enumeration algorithms (Tomita, 
          Eppstein-Löffler-Strash, and Chiba-Nishizeki) across different datasets,
          we can draw the following conclusions:
        </p>
        
        <ul>
          <li>
            <strong>Runtime Efficiency:</strong> The Eppstein-Löffler-Strash algorithm 
            consistently showed better performance on large sparse graphs, while Tomita's 
            algorithm performed well on denser graphs.
          </li>
          <li>
            <strong>Memory Usage:</strong> Chiba-Nishizeki's algorithm demonstrated the 
            lowest memory footprint, making it suitable for memory-constrained environments.
          </li>
          <li>
            <strong>Scalability:</strong> All algorithms showed degrading performance with 
            increasing graph size, but ELS was the most scalable for very large networks.
          </li>
        </ul>
      </section>

      <section>
        <h3>Practical Recommendations</h3>
        <p>Based on our findings, we recommend:</p>
        
        <ul>
          <li>For social network analysis: Use ELS algorithm due to its efficiency with sparse graphs</li>
          <li>For dense biological networks: Consider Tomita's algorithm</li>
          <li>For resource-constrained environments: Chiba-Nishizeki offers the best memory-performance trade-off</li>
        </ul>
      </section>

      <section>
        <h3>Future Work</h3>
        <p>
          Our study opens several avenues for future research:
        </p>
        
        <ul>
          <li>Exploration of parallel implementations for further performance gains</li>
          <li>Hybrid approaches combining strengths of different algorithms</li>
          <li>Application-specific optimizations for domains like bioinformatics or social network analysis</li>
        </ul>
      </section>
    </div>
  );
};

export default Conclusions; 