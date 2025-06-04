
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
                insertNode(value, node.leftChild)
            }
        }
        else if (value > node.data) {
            if (!node.rightChild) {
                node.rightChild = new TreeNode(value)
            } else {
                insertNode(value, node.rightChild)
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

}