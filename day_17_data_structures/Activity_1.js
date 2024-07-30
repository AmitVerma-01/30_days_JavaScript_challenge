//Task 1: Implement a Node class to represent an element in linked list with properties value and next
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertElement(val) {
    let temp = new Node(val);
    if (this.head == null) {
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    console.log(val+" is inserted");
  }
  removeElement() {
    let current = this.head;
    if (current == null) {
      console.log("Can not remove the element because the list is empty");
    } else if (current == this.tail) {
      this.head = null;
      this.tail = null;
      console.log("element is removed successfully and now list is empty");
    }
    else{
    while (current.next != this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    console.log("element is removed successfully");
}
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value + " ");
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insertElement(23);
list.insertElement(56);
list.removeElement();
list.printList();
