import React from "react";
import "./Conclusions.css";

const Conclusions = () => {
  return (
    <div className="conclusions-container">
      <h2>Comparative Analysis</h2>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Degeneracy Ordering</th>
            <th>Chiba Algorithm</th>
            <th>Tomita Algorithm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time Complexity</td>
            <td>O(3^(d/3)) where d is degeneracy</td>
            <td>O(3^(n/3))</td>
            <td>O(3^(n/3))</td>
          </tr>
          <tr>
            <td>Memory Efficiency</td>
            <td>High (minimizes intermediate sets)</td>
            <td>Moderate (uses unordered sets)</td>
            <td>Variable (depends on implementation)</td>
          </tr>
          <tr>
            <td>Performance on Wiki-Vote</td>
            <td>9.5s, ~460,000 maximal cliques</td>
            <td>Fastest due to sparsity</td>
            <td>11,012 ms, 459,002 maximal cliques</td>
          </tr>
          <tr>
            <td>Performance on Email-Enron</td>
            <td>25 s, ~230,000 maximal cliques</td>
            <td>Slower due to higher edge density</td>
            <td>294,561 ms, 226,859 maximal cliques</td>
          </tr>
          <tr>
            <td>Performance on as-Skitter</td>
            <td>~373,323,355 maximal cliques</td>
            <td>Slowest due to extreme density</td>
            <td>49h 18m 39s, 373,323,355 maximal cliques</td>
          </tr>
          <tr>
            <td>Key Optimization</td>
            <td>Degeneracy ordering with priority queue</td>
            <td>Pivot selection based on degree</td>
            <td>Optimized pivot selection function</td>
          </tr>
          <tr>
            <td>Average Clique Size (Wiki-Vote)</td>
            <td>7.32</td>
            <td>7.32</td>
            <td>7.22</td>
          </tr>
          <tr>
            <td>Average Clique Size (Email-Enron)</td>
            <td>8.08</td>
            <td>8.08</td>
            <td>8.07</td>
          </tr>
          <tr>
            <td>Average Clique Size (as-Skitter)</td>
            <td>19.94</td>
            <td>19.94</td>
            <td>19.95</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Conclusions; 


