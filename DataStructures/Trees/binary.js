class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){

    // set a new variable for the new node
    // check if this root is empty and if so return this as the new node
    // else set the current node as this root
    // while there is a current node
    // we must check if the value to insert is less than the current node
    // if its < current node we move to the left
    // if its > the current node we move to the right
    // if value < currentNode we check 
    // if the new space is empty. if its empty we set that as the new node
    // else we keep moving to the left to check till we find an empty spot
    // once we find a spot we set currentNode to that currentNode.left
    // if its value > currentNode we move to the right
    // if there is space at the right spot we insert new node
    // if not we keep moving to the right to find an empty spot
    







  }
  lookup(value){
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)))

function traverse(node){
  const tree = { value: node.value };
  tree.left = node.left === null ? null :
  traverse(node.left);
  tree.right = node.right === null ? null :
  traverse(node.right);
  return tree;
}

