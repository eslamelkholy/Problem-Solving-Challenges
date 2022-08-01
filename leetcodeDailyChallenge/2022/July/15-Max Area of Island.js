/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxSum = 0;
    const dfs = (x, y) => {
        if(grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === 0) return 0;
        grid[x][y] = 0;
        let sum = 1;
 
        sum += dfs(x + 1, y);
        sum += dfs(x - 1, y);
        sum += dfs(x, y + 1);
        sum += dfs(x, y - 1);
        return sum;
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            maxSum = Math.max(dfs(i, j), maxSum);
        }
    }
    return maxSum;
};
