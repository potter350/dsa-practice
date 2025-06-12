

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










function dijkstraShortestPath(startingCity, finalDestination) {
    const cheapestPricesTable = {};
    const cheapestPreviousStopoverCityTable = {};
    let unvisitedCities = [startingCity];
    const visitedCities = {};
    cheapestPricesTable[startingCity.name] = 0;
    let currentCity = startingCity;
    while (unvisitedCities.length > 0) {
        visitedCities[currentCity.name] = true;
        unvisitedCities = unvisitedCities.filter((city) => city !==
            currentCity);
        for (const adjacentCity of currentCity.routes.keys()) {
            const price = currentCity.routes.get(adjacentCity);
            if (!visitedCities[adjacentCity.name] &&
                !unvisitedCities[adjacentCity]) {
                unvisitedCities.push(adjacentCity);
            }
            const priceThroughCurrentCity =
                (cheapestPricesTable[currentCity.name] + price);
            if (!cheapestPricesTable[adjacentCity.name] || priceThroughCurrentCity
                < cheapestPricesTable[adjacentCity.name]) {
                cheapestPricesTable[adjacentCity.name] = priceThroughCurrentCity;
                cheapestPreviousStopoverCityTable[adjacentCity.name] =
                    currentCity.name;
            }
        }
        let cheapestPrice = Infinity;
        for (const city of unvisitedCities) {
            if (cheapestPricesTable[city.name] < cheapestPrice) {
                cheapestPrice = cheapestPricesTable[city.name];
                currentCity = city;
            }
        }
    }
    const shortestPath = [];
    let currentCityName = finalDestination.name;
    while (currentCityName) {
        shortestPath.unshift(currentCityName);
        currentCityName = cheapestPreviousStopoverCityTable[currentCityName];
    }
    return shortestPath;
}




class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Insert an element with a given priority (distance)
    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority); // Min-priority queue
    }

    // Remove and return the element with the smallest priority
    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, startNode) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    // Step 1: Initialize distances
    for (let node in graph) {
        distances[node] = Infinity; // Assume all nodes are unreachable
        previous[node] = null;
    }
    distances[startNode] = 0; // Distance to start node is 0

    // Step 2: Start from the starting node
    pq.enqueue(startNode, 0);

    // Step 3: Loop until all nodes are processed
    while (!pq.isEmpty()) {
        const { node: currentNode } = pq.dequeue();

        // Step 4: For each neighbor, calculate tentative distance
        for (let neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor]; // Edge weight
            const newDistance = distances[currentNode] + weight;

            // If shorter path found
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentNode;
                pq.enqueue(neighbor, newDistance); // Re-enqueue with new priority
            }
        }
    }

    return { distances, previous };
}


const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3, E: 1 },
    E: { D: 1 }
};

const { distances, previous } = dijkstra(graph, 'A');
console.log("Distances:", distances);
console.log("Previous paths:", previous);



















// creating Graph for calc
// import weightedVertex from './WeightedGraph-Vertex.js'

// let A = new weightedVertex('A')
// let B = new weightedVertex('B')
// let C = new weightedVertex('C')
// let D = new weightedVertex('D')
// let E = new weightedVertex('E')
// let F = new weightedVertex('F')
// let H = new weightedVertex('H')

// A.addAjacentVertices(B,3)
// A.addAjacentVertices(C,2)
// B.addAjacentVertices(E,2)
// B.addAjacentVertices(D,1)
// C.addAjacentVertices(D,2)
// C.addAjacentVertices(F,3)
// D.addAjacentVertices(E,3)
// D.addAjacentVertices(F,2)
// D.addAjacentVertices(H,4)
// E.addAjacentVertices(H,4)
// F.addAjacentVertices(H,3)

// console.log('Root Graph', A)


// import MinHeap from "../PriorityQueues-Heaps/MinHeap.js";

// function findShortestPath(rootVertex){
//        let currentVertex = rootVertex
//        let currentVertexPrice = 0
//        let VisitedVertices = {}   // to check and store visited vertex
//        let minHeap = new MinHeap() // to find smallest value quickly
//          console.log('current vertex', currentVertex)
//          VisitedVertices[currentVertex.name] = true

//        for(const parent of currentVertex.adjacentVertices ){
           
//            console.log('parent', parent)
//            console.log('VisitedVertices', VisitedVertices)
//            if(!VisitedVertices[parent]){
//                  for(const [childVertex, value] of Object.entries(parent)){
//            console.log('childVertex', childVertex)
//         //    console.log('childVertex.name', childVertex.name)
//         //    console.log('childVertex value', value)
                      
//                  }
//            }
//        }


// }
// findShortestPath(A)



