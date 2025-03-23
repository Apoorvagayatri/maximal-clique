import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="overview-container">
      <header>
        <h1>Algorithm Overviews</h1>
        <p>A summary of the three maximal clique enumeration algorithms implemented in this project.</p>
      </header>

      <section className="algo-overview">
        <h2>Tomita et al. Algorithm</h2>
        <p>
          <strong>Paper:</strong> <i>The Worst-case Time Complexity for Generating All Maximal Cliques and Computational Experiments</i> (Tomita et al., 2006)
        </p>
        <p>
          This depth-first search (DFS) algorithm generates all maximal cliques efficiently, using <strong>pruning techniques</strong> and <strong>ordering strategies</strong>.
          It builds on the Bron–Kerbosch method and achieves an <strong>optimal worst-case time complexity of O(3ⁿ/3)</strong>, which matches the theoretical upper bound.
        </p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Pivot selection to minimize recursive calls</li>
          <li>Tree-like output format to save space</li>
          <li>Worst-case optimal performance</li>
        </ul>
      </section>

      <section className="algo-overview">
        <h2>Eppstein, Löffler & Strash (ELS) Algorithm</h2>
        <p>
          <strong>Paper:</strong> <i>Listing All Maximal Cliques in Sparse Graphs in Near-Optimal Time</i> (Eppstein, Löffler, Strash, 2010)
        </p>
        <p>
          This algorithm modifies the classic **Bron–Kerbosch** method by using <strong>degeneracy ordering</strong> to improve efficiency. It runs in <strong>O(dn3d/3)</strong>, where <strong>d</strong> is the graph's degeneracy.
        </p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Uses degeneracy ordering for efficient traversal</li>
          <li>Improves on Bron-Kerbosch by reducing redundant computations</li>
          <li>Ideal for **sparse graphs** like social and biological networks</li>
        </ul>
      </section>

      <section className="algo-overview">
        <h2>Chiba & Nishizeki Algorithm</h2>
        <p>
          <strong>Paper:</strong> <i>Arboricity and Subgraph Listing Algorithms</i> (Chiba & Nishizeki, 1985)
        </p>
        <p>
          This method takes advantage of a graph's **arboricity** to efficiently enumerate maximal cliques. The algorithm runs in <strong>O(a(G) * m) per clique</strong>, where **a(G)** is the arboricity of the graph.
        </p>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Processes edges efficiently using **subgraph scans**</li>
          <li>Uses **degree-based ordering** for optimization</li>
          <li>Highly efficient for **planar graphs and social networks**</li>
        </ul>
      </section>

      <footer>
        <Link to="/">← Back to Home</Link>
      </footer>
    </div>
  );
};

export default Overview;
