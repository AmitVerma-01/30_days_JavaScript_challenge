// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// - Write a function that takes two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each node contains a single sigit.
// Add the two numbers and return the sum as a Linked list.
// - Create a few test cases with linked lists and log the sum as a linked list.

// Solution

var addTwoNumbers = function(l1, l2) {
    let rem = 0;
    let newHead = new ListNode();
    let temp = newHead;

    while(l1 && l2){
        let sum = l1.val + l2.val + rem;
        rem=0;
        if(sum>9){
            temp.next = new ListNode(sum % 10);
            rem=Math.floor(sum/10);
        }else{
            temp.next = new ListNode(sum);
        }
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1){
        let sum = l1.val + rem;
        rem=0;
        if(sum>9){
            temp.next = new ListNode(sum%10);
            rem=Math.floor(sum/10);
        }else{
            temp.next = new ListNode(sum);
        }
        temp = temp.next;
        l1 = l1.next;
    }
    while(l2){
        let sum = l2.val+rem;
        rem=0;
        if(sum>9){
            temp.next = new ListNode(sum%10);
            rem=Math.floor(sum/10);
        }else{
            temp.next = new ListNode(sum);
        }
        temp = temp.next;
        l2 = l2.next;
    }
    if(rem) temp.next = new ListNode(rem)
    return newHead.next;
};