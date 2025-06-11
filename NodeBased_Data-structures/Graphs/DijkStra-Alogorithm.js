

// ! Dijkstra algorithm is used to find shortest path in weighted Graphs(non negative values)

/* 
🔶 1. Problem Setup and Assumptions
-----------------------------------
✅ Greedy Nature:
Dijkstra’s Algorithm uses a greedy strategy.

Why:
- At each step, it selects the unvisited node with the smallest known distance from the source.
- This local optimal choice is assumed to lead to a globally optimal path.
*/

/* 
🧱 2. Initialization
---------------------
*/

// Step 1: Initialize distances
// What:
// - Set the starting node's distance to 0.
// - Set all other nodes' distances to Infinity (∞).
// Why: 
// - This assumes all nodes are initially unreachable except the source.
// When:
// - At the very beginning of the algorithm.

// Step 2: Mark all nodes as unvisited
// What:
// - Maintain a set of unvisited nodes.
// Why:
// - To avoid re-processing and to ensure the algorithm eventually terminates.
// When:
// - During the setup phase, before starting the main loop.

// Step 3: Set the current node to the start node
// What:
// - Begin with the source node as the current node.
// Why:
// - All tentative distances are calculated in reference to this node.
// When:
// - Right after initialization.

/* 
🔁 3. Core Loop — Exploration and Updates
------------------------------------------
*/

// Step 4: Check all unvisited neighbors of the current node
// What:
// - Look at all direct connections (edges) from the current node.
// Why:
// - To determine if a shorter path exists through the current node.
// When:
// - During each iteration while processing the current node.

// Step 5: Calculate tentative distances to each neighbor
// What:
// - Use: tentativeDistance = distance[currentNode] + edgeWeight
// Why:
// - To evaluate the cost to reach each neighbor via the current node.
// When:
// - While visiting each unvisited neighbor.

// Step 6: Compare with existing known distances
// What:
// - If the new tentative distance is smaller, update:
//   - The neighbor’s distance.
//   - The predecessor table (store current node as previous).
// Why:
// - Because a shorter path has been found.
// When:
// - During neighbor inspection.

/* 
✅ 4. Progression and Termination
----------------------------------
*/

// Step 7: Mark current node as visited
// What:
// - Mark the node so it's not visited again.
// Why:
// - Once processed, its shortest path is finalized.
// When:
// - After all neighbors have been checked and updated.

// Step 8: Select the next node to process
// What:
// - Choose the unvisited node with the smallest tentative distance.
// Why:
// - This ensures the closest node is always expanded next (greedy behavior).
// When:
// - At the end of each main loop iteration.

// Step 9: Repeat
// What:
// - Repeat steps 4 to 8.
// Until:
// - All nodes have been visited, OR
// - The destination node’s shortest path has been determined.

/* 
🛣️ 5. Result Construction — Building the Path
----------------------------------------------
*/

// Step 10: Reconstruct the shortest path
// What:
// - Backtrack from the destination using the predecessor table.
// Why:
// - To construct the actual path taken (not just the cost).
// When:
// - After the algorithm completes all iterations.
