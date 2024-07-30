class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    if (this.items.length === 0) {
      console.log("stack is empty");
    } else {
      this.items.pop();
    }
  }
  peek() {
    if (this.items.length !== 0) {
      const index = this.items.length - 1;
      return this.items[index];
    }
    return null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const st = new Stack();

let testStr = "test string";
for (let i of testStr) {
  st.push(i);
}
let reverseStr = "";
while (!st.isEmpty()) {
  reverseStr += st.peek();
  st.pop();
}
console.log("reversed string is " + reverseStr);
