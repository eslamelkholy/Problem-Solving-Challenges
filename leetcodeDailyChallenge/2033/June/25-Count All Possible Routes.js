/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  let count = 0;
  const dfs = (start, finish, fuel) => {
    if (fuel < 0) return;
    if (start === finish) {
      count++;
      return;
    }
    for (let i = 0; i < locations.length; i++) {
      if (i === start) continue;
      dfs(i, finish, fuel - Math.abs(locations[start] - locations[i]));
    }
  };
  dfs(start, finish, fuel);
  return count;
}

console.log(countRoutes([2, 3, 6, 8, 4], 1, 3, 5)); // 4
