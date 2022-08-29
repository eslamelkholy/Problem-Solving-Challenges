/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let numofIslands = 0;

    const dfs = (x, y) => {
        if(grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === "0") return 0;
        
        grid[x][y] = "0";
        
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
        return 1;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            numofIslands += dfs(i,j);
        }        
    }
    
    return numofIslands;
};