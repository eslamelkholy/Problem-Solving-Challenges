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
