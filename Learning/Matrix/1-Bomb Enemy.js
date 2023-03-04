/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  let maxEnemies = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== "0") continue; // Continue if not Empty

      let enemies = 0;

      // Count Current Row Enemy >> Forward
      for (let k = j; k < grid[i].length; k++) {
        if (grid[i][k] === "W") break; // Wall

        if (grid[i][k] === "E") enemies++; // Enemy
      }
      // Count Current Row Enemy >> Backward
      for (let k = j; k >= 0; k--) {
        if (grid[i][k] === "W") break; // Wall

        if (grid[i][k] === "E") enemies++; // Enemy
      }

      // Count Current Coll Enemy >> UP
      for (let c = i; c < grid.length; c++) {
        if (grid[c][j] === "W") break;

        if (grid[c][j] === "E") enemies++;
      }

      // Count Current Coll Enemy >> Down
      for (let c = i; c >= 0; c--) {
        if (grid[c][j] === "W") break;

        if (grid[c][j] === "E") enemies++;
      }
      maxEnemies = Math.max(enemies, maxEnemies);
    }
  }

  return maxEnemies;
};
