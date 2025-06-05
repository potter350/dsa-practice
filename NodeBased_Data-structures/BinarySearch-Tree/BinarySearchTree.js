import TreeNode from "./TreeNode.js"

class BinarySearchTree {
    constructor(data) {
        this.data = data
    }

    searchNode(searchValue, node) {
        if (!node || searchValue === node.data) {
            return node
        }

        if (searchValue < node.data) {
            return searchNode(searchValue, node.leftChild)
        }
        else if (searchValue > node.data) {
            return searchNode(searchValue, node.rightChild)
        }
    }

    insertNode(value, node) {
        if (value < node.data) {
            if (!node.leftChild) {
                node.leftChild = new TreeNode(value)
            } else {
                this.insertNode(value, node.leftChild)
            }
        }
        else if (value > node.data) {
            if (!node.rightChild) {
                node.rightChild = new TreeNode(value)
            } else {
                this.insertNode(value, node.rightChild)
            }
        }
    }

    // The Complete Deletion Algorithm

    // Putting all the steps together, here is the algorithm for
    // deletion from a binary search tree:

    // If the node being deleted has no children, simply delete
    // it.

    // If the node being deleted has one child, delete the node
    // and plug the child into the spot where the deleted node
    // was.

    // When deleting a node with two children, replace the
    // deleted node with the successor node. The successor
    // node is the child node whose value is the least of all
    // values that are greater than the deleted node.

    // To find the successor node: visit the right child of the
    // deleted node, and then keep on visiting the left child of
    // each subsequent child until there are no more left
    // children. The bottom node is the successor node. If the
    // deleted node’s right child has no left children, the
    // deleted node’s right child itself becomes the successor
    // node.

    // If the successor node has a right child (and the
    // successor node was itself a left child of its parent), after
    // plugging the successor node into the spot of the deleted
    // node, take the former right child of the successor node
    // and turn it into the left child of the former parent of the
    // successor node.

    // implementation
    // 1.check which side to slide in (find which node to delete)
    // 2.if node has no children delete it
    // 3.if node has one child , delete node and replace the child
    // 4.if node has 2 children, find succussor node, replace it with node to delete

    deleteNode(valueToDelete, node) {
        console.log('delete node called');

        let currentNode = node;
        let parrentNodeOfCurrentNode = null
        let childOfDeleteNode
        let nodeToDelete

        // finding which node to delete
        while (currentNode) {
            // base condition - loops ends when(1.nodeToDelete found or 2.reach end currentnode = null)
            if (valueToDelete === currentNode.data) {
                nodeToDelete = currentNode
                break;
            }
            parrentNodeOfCurrentNode = currentNode
            if (valueToDelete < currentNode.data) {
                currentNode = currentNode.leftChild
            }
            else if (valueToDelete > currentNode.data) {
                currentNode = currentNode.rightChild
            }
        }
        console.log('nodetodelete', nodeToDelete)
        if (!currentNode) return null;

        // if deleting node has 2 children
        if (nodeToDelete.leftChild && nodeToDelete.rightChild) {
            replaceWithSuccessorNode(nodeToDelete)
        } else {
            // if delete node has 0 or 1 children
            childOfDeleteNode = (nodeToDelete.leftChild || nodeToDelete.rightChild)
            if (!parrentNodeOfCurrentNode) {
                // copying of child data into root node and unlinked the child
                nodeToDelete.data = childOfDeleteNode.data
                nodeToDelete.leftChild = childOfDeleteNode.leftChild
                nodeToDelete.rightChild = childOfDeleteNode.rightChild
            } else {
                // replacing deletingnode child into deleting node
                if (parrentNodeOfCurrentNode.leftChild === nodeToDelete) {
                    parrentNodeOfCurrentNode.leftChild = nodeToDelete.leftChild
                }
                else if (parrentNodeOfCurrentNode.rightChild === nodeToDelete) {
                    parrentNodeOfCurrentNode.leftChild = nodeToDelete.rightChild
                }
            }
        }



    }




    // version one
    // replaceWithSuccessorNode(node) {
    //     // finding its right child and then keep looking on left for successor
    //     let successorNode = node.rightChild
    //     let parentOfSuccessorNode = node

    //     if (!successorNode.leftChild) {
    //         node.data = successorNode.data
    //         parentOfSuccessorNode.rightChild = successorNode.rightChild
    //         return
    //     }

    //     while (successorNode.leftChild) {
    //         parentOfSuccessorNode = successorNode
    //         successorNode = successorNode.leftChild
    //     }

    //     //assigning successor value to node to deleted
    //     node.data = successorNode.data

    //     //   unlinking the successor node after replaced to root 
    //     if (parentOfSuccessorNode.leftChild === successorNode) {
    //         parentOfSuccessorNode.leftChild = successorNode.rightChild
    //     } else {
    //         parentOfSuccessorNode.rightChild = successorNode.rightChild
    //     }
    //     return successorNode

    // }

    // version two
    replaceWithSuccessorNode(node) {
        let successorNode = node.rightChild
        let parentOfSuccessorNode = node

        // if leftchild is not there on successor node
        if (!successorNode.leftChild) {
            node.data = successorNode.data
            node.rightChild = successorNode.rightChild
            return
        }

        // finding last chain value of leftchild(successor node)
        while (successorNode.leftChild) {
            parentOfSuccessorNode = successorNode
            successorNode = successorNode.leftChild
        }

        // assinging successor value to root
        node.data = successorNode.data

        // unlinking successor node
        if (successorNode.rightChild) {
            parentOfSuccessorNode.leftChild = successorNode.rightChild
        } else {
            parentOfSuccessorNode.leftChild = null
        }

        return successorNode

    }

    // traverse (visiting all nodes)(printing all values in tree sortedly)
    traverseAndPrint(node) {
        let traverseCollection = []
        function print(current){
            if (!current) return current;
            print(current.leftChild);
            traverseCollection.push(current.data);
            print(current.rightChild);
        }


        print(node)
        return this.traverseCollection
    }

    // Write an algorithm that finds the greatest value within a binary search tree.
    findGreatestNumber(baseNode){
         let greatestNode;
         if(!baseNode) return null;
         while(baseNode.rightChild){
             greatestNode = baseNode.rightChild
             baseNode = baseNode.rightChild
         }
        return greatestNode.data
    }

}

export default BinarySearchTree;