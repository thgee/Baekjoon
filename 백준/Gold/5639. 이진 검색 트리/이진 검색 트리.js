let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => Number(it));
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  push(data) {
    this.length++;
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let i = this.root,
      j = null;
    while (i !== null) {
      j = i;
      if (i.data > newNode.data) i = i.left;
      else if (i.data < newNode.data) i = i.right;
    }
    if (j.data > newNode.data) j.left = newNode;
    else if (j.data < newNode.data) j.right = newNode;
    return;
  }
}

const tree = new Tree();
for (let x of arr) {
  tree.push(x);
}

let res = [];
const postOrderTraversal = (node) => {
  if (node === null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  res.push(node.data);
};

postOrderTraversal(tree.root);
console.log(res.join("\n"));
