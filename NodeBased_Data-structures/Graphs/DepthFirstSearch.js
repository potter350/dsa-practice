
import vertex from "./Vertex.js";

let Bob = new vertex('Bob')
let Alice = new vertex('Alice')
let Helen = new vertex('Helen')
let Candy = new vertex('Candy')
let Fred = new vertex('Fred')

Bob.addAjacentVertices(Alice)
Alice.addAjacentVertices(Helen)
Helen.addAjacentVertices(Candy)
Bob.addAjacentVertices(Fred)
Candy.addAjacentVertices(Fred)


// Depth First Search
function dfsOnGraph(vertex, visitedVertices = {}) {
     // storing visited vertices into hash for checking
     visitedVertices[vertex.value] = true
     console.log('vertex', vertex.value);

     // iterating through vertex's adjacent vertices
     for (const avertex of vertex.adjacentVertices) {
          if (!visitedVertices[avertex.value]) {
               dfsOnGraph(avertex, visitedVertices)
          }
     }
}
dfsOnGraph(Bob)

// search Specific value on graph
function searchValueOngraph(vertex, searchValue, visitedVertices = {}) {
     if (vertex.value === searchValue) return vertex;
     visitedVertices[vertex.value] = true;
     let searchingVertex;
     for (const avertex of vertex.adjacentVertices) {
          if (avertex.value === searchValue) return avertex;

          if (!visitedVertices[avertex.value]) {
               searchingVertex = searchValueOngraph(avertex, searchValue, visitedVertices)
          }
          if (searchingVertex) return searchingVertex
     }
     return null;
}
console.log(searchValueOngraph(Bob, 'c'));



