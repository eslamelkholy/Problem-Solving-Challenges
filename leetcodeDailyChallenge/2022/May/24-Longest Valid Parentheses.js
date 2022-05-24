/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 2; j <= s.length; j +=2) {
            if(isValidParentheses(s.substring(i,j))) {
                maxLen = Math.max(maxLen, j - i);
            }
        }
    }
    return maxLen;
};

const isValidParentheses = (str) => {
    const stack = [];
    
    for(const char of str) {
        if(char === '(') {
            stack.push(char);
        }else if (stack.length !== 0 && stack[stack.length - 1] === '(') {
            stack.pop();
        }else {
            return false;
        }
    }
    
    return stack.length === 0;
}
