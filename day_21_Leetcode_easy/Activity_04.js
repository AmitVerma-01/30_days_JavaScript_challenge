// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// solution

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0,null)
    let temp = head
    while(list1 && list2){
        if(list1.val <= list2.val){
            temp.next =new ListNode(list1.val , null);
            list1=list1.next;
        }else{
            temp.next = new ListNode(list2.val,null);
            list2 = list2.next;
        }
            temp=temp.next
    }
    if(list1){
        temp.next = list1;
    }
    if(list2)
        temp.next=list2;
    return head.next;
};

