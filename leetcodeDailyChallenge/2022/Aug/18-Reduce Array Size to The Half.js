/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const freqMap = {};
    let result = 0;
    let sum = arr.length;
    for(const num of arr) {
        freqMap[num] !== undefined ? freqMap[num]++ : freqMap[num] = 1;
    }
    
    const freqArr = Object.values(freqMap).sort((a, b) => b - a);
    
    for(let i = 0; i < freqArr.length; i++) {
        result++;
        sum -= freqArr[i];
        
        if(sum <= arr.length / 2) return result 
    }
    
    return result;
};
