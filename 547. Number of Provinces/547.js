// Description: https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let adj = {}
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      let val = isConnected[i][j]

      if (val === 1) {
        if (!adj[i]) adj[i] = [j]
        else adj[i].push(j)
      }
    }
  }

  const dfs = (currNode) => {
    if (visited.has(currNode)) return 0
    visited.add(currNode)

    let neighbours = adj[currNode]
    for (let n of neighbours) {
      dfs(n)
    }

    return 1
  }

  let visited = new Set()
  let count = 0

  for (let key in adj) {
    let keyNum = parseInt(key)
    count += dfs(keyNum)
  }

  return count
}
