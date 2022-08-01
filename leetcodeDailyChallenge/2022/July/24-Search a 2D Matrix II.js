var searchMatrix = function(matrix, target) {
    for(let arr of matrix) {
        if(binarySearch(arr, target)) return true;
    }
    
    return false;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentItem = arr[mid];
        
        if(currentItem === target) return true;
        
        if(currentItem < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    var row = 0;
    var col = matrix[0].length - 1;
    
    while(row <= matrix.length - 1 && col >= 0){
        
        if(matrix[row][col] === target) return true;
        
        if(matrix[row][col] > target){
            col--;
        }else if(matrix[row][col] < target){
            row++;
        }
    }
    return false;
};
