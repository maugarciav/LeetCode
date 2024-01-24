/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
  const dfs = (node) => {
      if(node === null) return null
      if(node === p || node === q) return node
      const left = dfs(node.left)
      const right = dfs(node.right)

      if(left && right) return node
      return left || right

  }
  return dfs(root)

};

// Description: 
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75


