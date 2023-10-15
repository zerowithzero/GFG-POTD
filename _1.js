// Q. Given a Binary Search Tree, modify the given BST such that it is balanced and has minimum possible height. Return the balanced BST.

// Solution
function buildBalancedTree(root) {
    // Define an inner function for in-order traversal of the BST
    function inorderTraversal(root, result = []) {
        if (root) {
            inorderTraversal(root.left, result); // Traverse left subtree
            result.push(root); // Push the current node to the result array
            inorderTraversal(root.right, result); // Traverse right subtree
        }
        return result; // Return the result array containing nodes in sorted order
    }

    // Define an inner function to recursively build a balanced BST from a sorted array
    function sortedArrayToBST(sortedArr, start = 0, end = sortedArr.length - 1) {
        if (start > end) {
            return null; // Base case: return null for empty or invalid subarray
        }

        const mid = Math.floor((start + end) / 2); // Calculate the middle index
        const node = new Node(sortedArr[mid].val); // Create a new node with the middle element
        node.left = sortedArrayToBST(sortedArr, start, mid - 1); // Recursively build left subtree
        node.right = sortedArrayToBST(sortedArr, mid + 1, end); // Recursively build right subtree

        return node; // Return the root of the balanced BST
    }

    // Perform in-order traversal to get nodes in sorted order
    const sortedNodes = inorderTraversal(root);

    // Build a balanced BST from the sorted nodes and return the root
    return sortedArrayToBST(sortedNodes);
};
