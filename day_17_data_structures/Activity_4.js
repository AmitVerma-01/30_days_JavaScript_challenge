class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class binaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new TreeNode(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  inorder(node){
    let tempNode = this.root;
     this.printInorder(tempNode);
  }
  printInorder(tempNode){
    if (tempNode === null) {
      return;
    }
    this.printInorder(tempNode.left);
    console.log(tempNode.value);
    this.printInorder(tempNode.right);
  }
}

const arr=[23,31,16,8,11,18,21];
let bt = new binaryTree();
for(let i of arr){
   bt.insert(i);
}
bt.inorder();



