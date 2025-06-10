
// vertex are node & vertices are nodes & edges are links
// all graphs are tree, but not all trees are graph bcoz graphs can have cycle & disconnected vertex
class vertex {
    constructor(value) {
        this.value = value;
        this.adjacentVertices = []
    }

    addAjacentVertices(vertex) {
        this.adjacentVertices.push(vertex);
    }
}

export default vertex;