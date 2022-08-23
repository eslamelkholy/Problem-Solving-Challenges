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
// var isPalindrome = function(head) {
//     let counter = 0;
//     const result = [];
//     while(head) {
//         counter++;
//         result.push(head.val);
//         head = head.next;
//     }
    
//     for(let i = 0; i < result.length / 2;i++) {
//         if(result[i] != result[result.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// };

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
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast != null) {
        slow = slow.next;  // Slow = less than the half of faster for (Odd)
    }
    
    slow = reverse(slow);
    fast = head;
    
    while (slow != null) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};

const reverse = (head) => {
    let prev;
    while(head) {
        const next = head.next;
        head.next = prev;
        
        prev = head;
        head = next;
    }
    
    return prev;
}
