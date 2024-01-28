//Desricption: https://leetcode.com/problems/delete-node-in-a-bst/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null
  let node = root

  if (key === node.val) {
    // node has no children
    if (node.left === null && node.right === null) return null

    // node has no left children
    if (node.left === null) return node.right

    // node has no right children
    if (node.right === null) return node.left

    // node has two children
    let tempNode = node.right
    while (tempNode.left !== null) {
      tempNode = tempNode.left
    }
    node.val = tempNode.val
    node.right = deleteNode(node.right, tempNode.val)
    return node
  } else if (key < node.val) {
    node.left = deleteNode(node.left, key)
    return node
  } else {
    node.right = deleteNode(node.right, key)
    return node
  }
}
