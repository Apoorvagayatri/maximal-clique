import React from "react";
import { Link } from "react-router-dom";
import "./Observations.css"; // Make sure to create this CSS file for styling

const Observations = () => {
  return (
    <div className="observations-container">
      <header>
        <h1>Observations on Maximal Clique Enumeration Algorithms</h1>
      </header>

      {/* Tomita Algorithm Observations */}
      <section className="observation-section">
        <h2>1. Tomita Algorithm</h2>
        <p>
          The algorithm by Tomita, Tanaka and Takahashi is a significant advancement in the field of maximal clique enumeration, it has improved worst case time complexity for enumeration of maximal cliques to **O(3ⁿ/3)**. It is a DFS based algorithm for generating all maximal cliques of an undirected graph in which the pruning methods are employed as in the Bron–Kerbosch algorithm.

        </p>
        <h5>
    By debugging statements employed in the different functions within the algorithm, we observe that the algorithm spends most of its time in the following subproblems:
</h5>
<ol>
    <li>Finding intersections between neighbor sets</li>
    <li>Selecting pivots</li>
    <li>Managing the recursive search tree</li>
</ol>

        <h3>Optimizations Implemented</h3>
        <ul>
          <li>Selectmaximising() function
 to select vertex u in SUBG that maximizes |CAND ∩ Γ(u)|
in the original implementation of algorithm, made multiple recursive intersection calls which leads to significant performance degradation to solve this we locally compute the desired elements of the intersection by a simple for loop implementation (iterating over CAND elements and checking if they are a neighbor of u), tracking max count associated with each u. Implementing this small change reduced the execution time from 5360529ms to 11012 ms a staggering 50X improvement, this shows us the size of the recursive overhead and highlights how critical it is to optimize inner-loop operations in recursive algorithms.

.</li>
          <li>adjSet implementation changed from the initial adjList implementation for storing the edges that selectively lets us decide if two vertices are neighbours in O(1) time using adjSet.</li>
          <li>We directly passed reference parameters to functions wherever needed to avoid unnecessary copying of large sized vectors using recursive functions.
          </li>
          <li>
            <em>To make Skitter implementable in real time given 11M edges, we sample 100 vertices while finding the vertex u in SUBG that maximizes |CAND ∩ Γ(u)| in the expand algorithm.</em>
          </li>
        </ul>
        
        <p>
          The efficacy of the pivoting strategy is greatly determined by the density of the graph:
          Dense regions, where many parsing paths are possible, allow for rapid elimination of incorrect candidates, reducing the number of possibilities.
          Sparse regions, where few parsing paths exist, keep candidate sets large because there are fewer immediate constraints to rule out wrong parses.
        </p>

        <h3>Performance Analysis</h3>
        <p>
          <strong>Wiki Vote Dataset:</strong> 11,012 ms, 459,002 maximal cliques. (Nodes: 7,115 Edges: 103,689)
          With 7,115 nodes and 103,689 edges, it has an E:V ratio = 14.57. This dataset is relatively denser compared to the others, allowing the pivoting strategy of the Tomita algorithm to prune the search space more effectively.
        </p>
        <p>
          <strong>Enron-Email:</strong> 294,561 ms, 226,859 maximal cliques. (Nodes: 36,692 Edges: 367,662)
          Comprising 36,692 nodes and 367,662 edges, it has an E:V ratio = 10.02. This graph is sparser than the Wiki Vote dataset, and the relative sparsity leads to less effective pruning by the pivot selection, resulting in a slower execution despite having a larger number of maximal cliques as Wiki Vote.
        </p>
        <p>
          <strong>As-Skitter:</strong> 49h 18m 39s, 40,001,624 maximal cliques. (Nodes: 1,696,415 Edges: 11,095,298)
          With 1,696,415 nodes and 11,095,298 edges, the E:V ratio = 6.5. As-Skitter is extremely sparse and huge in number, which means that during recursion, the candidate sets remain large, dramatically increasing execution time as both factors contribute to a larger number of operations.
        </p>
        <p>
          We observe that the density of the graph is indirectly proportional to the execution time of the algorithm.
        </p>

        <h3>Key Observation</h3>
        <p>
          The density of the graph is inversely proportional to execution time. Denser graphs allow for more effective pruning, leading to faster execution.
        </p>
      </section>

      {/* ELS Algorithm Observations */}
      <section className="observation-section">
        <h2>2. Eppstein, Löffler & Strash (ELS) Algorithm</h2>
        <p>
          The Bron-Kerbosch-based algorithm is optimized with degeneracy ordering, enabling efficient maximal clique enumeration.
        </p>

        <h3>Performance Analysis</h3>
        <ul>
          <li><strong>Email-Enron:</strong> 9.719s | 226,859 maximal cliques (Largest Clique: 20, Avg: 8.08, Std Dev: 3.32)</li>
          <li><strong>Wiki-Vote:</strong> 12.119s | 459,002 maximal cliques (Largest Clique: 17, Avg: 7.32, Std Dev: 2.35)</li>
          <li><strong>As-Skitter:</strong> 37.7 min | 37,332,355 maximal cliques (Largest Clique: 67, Avg: 19.94, Std Dev: 12.91)</li>
        </ul>

        <h3>Observations</h3>
        <ul>
          <li>Handles small datasets efficiently within seconds.</li>
          <li>Scales well even for large graphs like As-Skitter.</li>
          <li>Degeneracy ordering improves performance by reducing redundant recursion.</li>
        </ul>

        <h3>Future Improvements</h3>
        <ul>
          <li>Implement parallel processing to enhance scalability.</li>
          <li>Integrate visualization tools for clique distributions.</li>
          <li>Extend analysis to directed and weighted graphs.</li>
        </ul>
      </section>

      {/* Chiba Algorithm Observations */}
      <section className="observation-section">
        <h2>3. Chiba & Nishizeki Algorithm</h2>
        <p>
          The Chiba algorithm leverages degeneracy ordering and optimized intersection operations, making it highly efficient for maximal clique enumeration.
        </p>

        <h3>Performance Analysis</h3>
        <ul>
          <li><strong>Email-Enron:</strong> Moderate clique sizes (Avg: 8.08), reflecting structured communication networks.</li>
          <li><strong>Wiki-Vote:</strong> Smaller cliques (Avg: 7.3), suggesting clustered voting behaviors.</li>
          <li><strong>As-Skitter:</strong> Larger cliques (Avg: 19.94) with high variance, indicating **dense interconnections in internet topology.</li>
        </ul>

        <h3>Algorithm Efficiency</h3>
        <ul>
          <li>Effectively leverages degeneracy ordering to minimize redundant operations.</li>
          <li>Uses optimized intersection and backtracking to prune the search space efficiently.</li>
          <li>Scales well to handle millions of maximal cliques.</li>
        </ul>

        <h3>Future Enhancements</h3>
        <ul>
          <li>Integrate parallel processing for improved performance.</li>
          <li>Develop graph visualization tools for better insights.</li>
          <li>Extend capabilities to dynamic and weighted graphs.</li>
        </ul>

        <h3>Additional Observations</h3>
        <p>
          The difference in clique size distributions across datasets reveals distinct clustering patterns between structured networks (social, organizational) and irregular internet graphs.  
          This highlights the algorithm's applicability in cybersecurity, social network analysis, and large-scale graph processing.
        </p>
      </section>

      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Observations;
