/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

// var canVisitAllRooms = function (rooms) {
//   const visitedRooms = { 0: true };
//   for (let i = 0; i < rooms.length; i++) for (let j = 0; j < rooms[i].length; j++) visitedRooms[rooms[i][j]] = true;

//   for (let k = 0; k < rooms.length - 1; k++) if (!visitedRooms[k + 1]) return false;
//   return true;
// };

var canVisitAllRooms = function (rooms) {
  const visitedRooms = new Set();
  visitedRooms.add(0);
  const keysStack = [0];
  while (keysStack.length !== 0) {
    const keys = rooms[keysStack.pop()];
    for (const key of keys)
      if (!visitedRooms.has(key)) {
        visitedRooms.add(key);
        keysStack.push(key);
      }
  }
  return visitedRooms.size === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
// console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
// console.log(canVisitAllRooms([[1], [1, 1]]));
// console.log(canVisitAllRooms([[2], [], [1]]));

// console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));

// console.log(canVisitAllRooms([[2], [], [1]]));

// console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));

// console.log(canVisitAllRooms([[1], [], [0, 3], [1]]));
