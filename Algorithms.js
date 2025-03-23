import React from "react";
import { Link } from "react-router-dom";

const Algorithms = () => {
  return (
    <div className="algorithms-container">
      <header>
        <h1>Algorithm Description</h1>
      </header>

      <section className="algo-section">
        <p>
          This implementation uses an optimized version of the <strong>Chiba-Nishizeki algorithm</strong> combined with <strong>degeneracy ordering</strong> to efficiently find all maximal cliques in the graph. The approach has the following key components:
        </p>

        <h2>1. Degeneracy Ordering</h2>
        <p>
          Vertices are processed in an order based on their degrees, which significantly reduces the search space. This is implemented using an efficient bucket sort method.
        </p>

        <h2>2. Chiba-Nishizeki Algorithm</h2>
        <p>
          A recursive algorithm that builds cliques incrementally while pruning branches that cannot lead to maximal cliques. The implementation includes several optimizations:
        </p>
        <ul>
          <li>Greedy vertex selection based on degree</li>
          <li>Efficient set intersection operations</li>
          <li>Early termination conditions</li>
          <li>Optimized maximality checking</li>
        </ul>

        <h2>3. Efficient Data Structures</h2>
        <p>We use various optimized data structures for performance:</p>
        <ul>
          <li>Adjacency lists using <code>unordered_sets</code> for O(1) lookups</li>
          <li>Pre-allocated buffers for intersection operations</li>
          <li>Bucket-based sorting for degeneracy ordering</li>
        </ul>
      </section>

      <section className="algo-section">
        <h1>Performance Considerations</h1>

        <h2>1. Memory Efficiency</h2>
        <ul>
          <li>Uses adjacency lists with unordered_sets to minimize memory usage while maintaining fast lookups.</li>
          <li>Pre-allocates buffers to reduce memory allocation overhead.</li>
        </ul>

        <h2>2. Computational Efficiency</h2>
        <ul>
          <li>Processes vertices in degeneracy order to reduce the search space.</li>
          <li>Selects vertices with the highest degree first in the recursion.</li>
          <li>Uses a simplified vertex selection strategy for deeper recursion levels.</li>
          <li>Implements early termination conditions.</li>
          <li>Optimizes the maximality checking process.</li>
        </ul>

        <h2>3. Progress Tracking</h2>
        <ul>
          <li>Periodic progress updates to monitor execution.</li>
          <li>Reports when new largest cliques are found.</li>
        </ul>
      </section>

      <section className="algo-section">
        <h1>Algorithm Details</h1>

        <h2>Bron-Kerbosch Algorithm</h2>
        <p>
          The <strong>Bron-Kerbosch algorithm</strong> is a recursive backtracking algorithm used for finding all maximal cliques in an undirected graph. A clique is a subset of vertices such that every two distinct vertices in the clique are adjacent. A maximal clique is a clique that cannot be extended by including one more adjacent vertex.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Pivot Selection:</strong> Reduces the number of recursive calls by selecting a pivot vertex that maximizes connections to candidates.</li>
          <li><strong>Degeneracy Ordering:</strong> Processes vertices in an order that minimizes the number of potential candidates at each step, resulting in faster execution.</li>
        </ul>
      </section>

      <section className="algo-section">
        <h1>Analysis and Observations</h1>

        <h2>1. Performance Analysis</h2>
        <ul>
          <li>For smaller networks like Email-Enron and Wiki-Vote, the analysis completes in seconds.</li>
          <li>Even for the much larger as-skitter dataset with over 40 million maximal cliques, the analysis completes in reasonable time.</li>
        </ul>

        <h2>2. Clique Size Distribution</h2>
        <ul>
          <li><strong>Email-Enron:</strong> Moderate-sized cliques (average 8.08), reflecting organizational communication patterns.</li>
          <li><strong>Wiki-Vote:</strong> Slightly smaller cliques (average 7.32), which may indicate voting coalitions or interest groups.</li>
          <li><strong>as-skitter:</strong> Much larger cliques (average 19.94) with higher variance, suggesting dense clustering in Internet topology.</li>
        </ul>

        <h2>3. Algorithm Efficiency</h2>
        <p>
          The degeneracy ordering optimization proves critical for handling large networks, particularly for as-skitter which has a complex structure with many potential cliques.
        </p>
      </section>

      <section className="algo-section">
        <h1>Implementation Features</h1>
        <ul>
          <li><strong>Graph Loading:</strong> Efficiently loads graph data from edge list files</li>
          <li><strong>Degeneracy Ordering:</strong> Implements an efficient algorithm to compute degeneracy ordering</li>
          <li><strong>Clique Detection:</strong> Uses optimized Bron-Kerbosch algorithm for maximal clique enumeration</li>
          <li><strong>Performance Measurement:</strong> Tracks execution time and clique statistics</li>
          <li><strong>Data Export:</strong> Saves clique size distribution for further analysis</li>
        </ul>
      </section>

      <section className="algo-section">
        <h1>Datasets Tested</h1>
        <ul>
          <li><strong>Email-Enron:</strong> Email communication network from Enron</li>
          <li><strong>Wiki-Vote:</strong> Wikipedia voting network (preprocessed with 0-based indexing)</li>
          <li><strong>as-skitter:</strong> Internet topology graph from traceroutes</li>
        </ul>
      </section>

      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Algorithms;
