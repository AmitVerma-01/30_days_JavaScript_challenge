class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    if (this.items.length === 0) {
      console.log("queue is empty");
    } else {
      this.items.shift();
    }
  }
  front() {
    if (this.items.length !== 0) {
      return this.items[0];
    }
    return "queue is empty";
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const q = new Queue();
let printer="123456";
for(let i of printer){
    q.enqueue(i);
    console.log("task " + q.front() + " is processing");
    console.log("task " + q.front() + " is completed");
    q.dequeue();

}
// while(!q.isEmpty()){
//     console.log("task "+q.front()+" is completed");
//     q.dequeue();
// }

