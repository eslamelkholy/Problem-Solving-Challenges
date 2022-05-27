/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let numOfSteps = 0;
    
    while(num !== 0) {
        if(num % 2 === 0) {
            num = num / 2;
        }else {
            num--;
        }
        numOfSteps++;
    }
    
    return numOfSteps;
};
