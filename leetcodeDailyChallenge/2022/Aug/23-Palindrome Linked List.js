/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let counter = 0;
    const result = [];
    while(head) {
        counter++;
        result.push(head.val);
        head = head.next;
    }
    
    for(let i = 0; i < result.length / 2;i++) {
        if(result[i] != result[result.length - i - 1]) {
            return false;
        }
    }
    return true;
};

