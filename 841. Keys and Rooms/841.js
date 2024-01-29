// Description: https://leetcode.com/problems/keys-and-rooms/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const keys = rooms[0] // unvisited rooms
  let UniqueKeys = new Set() // uniquely visited rooms
  while (keys[keys.length - 1]) {
    let key = keys.pop() // getting unvisited room
    UniqueKeys.add(key) // adding to visited rooms
    for (let k of rooms[key]) {
      // if the room is not visited adding it in to-be visited
      if (!UniqueKeys.has(k)) {
        keys.push(k)
      }
    }
  }
  return UniqueKeys.size == rooms.length - 1
}
