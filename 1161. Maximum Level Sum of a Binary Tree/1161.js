// desription: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

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
 * @return {number}
 */
var maxLevelSum = function (root) {
  const queue = [root]
  let res = root.val
  let lvl = 1
  let final = lvl

  while (queue.length) {
    let len = queue.length
    let tres = 0

    while (len--) {
      let node = queue.shift()
      tres += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (tres > res) {
      res = tres
      final = lvl
    }
    lvl++
  }

  return final
}
