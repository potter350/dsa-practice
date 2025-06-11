
import vertex from "./Vertex.js";
import Queue from "../../queue.js";


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


// Breadth First Search uses Queue
 function bfsGraph(startingVertex){
    let queue = new Queue()
    let visitedVertices = {}
    let currentVertex;

    visitedVertices[startingVertex.value] = true
    queue.enqueue(startingVertex)

    while(queue.read()){
         currentVertex = queue.dequeue()
         console.log('current Vertex',currentVertex.value)
         for(const avertex of currentVertex.adjacentVertices){
            if(! visitedVertices[avertex.value] ){
                   visitedVertices[avertex.value] = true;
                   queue.enqueue(avertex)
            }
         }

    }


 }

 bfsGraph(Bob)