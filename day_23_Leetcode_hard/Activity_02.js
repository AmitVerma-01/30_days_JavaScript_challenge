// Activity 2: Merge k sorted Lists

// Task 2: Solve the "Merge k Sorted Lists" problem on leetcode.
// 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let nums = [];
    lists.forEach(list => {
        while (list) {
            nums.push(list.val);
            list = list.next;
        }
    });
    
    nums.sort((a, b) => a - b);
    
    let head = new ListNode(0);
    let temp = head;
    nums.forEach(num => {
        temp.next = new ListNode(num);
        temp = temp.next;
    });
    
    return head.next;
};

