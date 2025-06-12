
// weighted Graph
class weightedVertex {
     constructor(name){
         this.name = name
         this.adjacentVertices = new Map()
     }

     addAjacentVertices(name, pathValue){
         this.adjacentVertices.set(name,pathValue)
     }

}

export default weightedVertex;