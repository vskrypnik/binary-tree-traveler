import Node from './Node';

class Tree {
  root = new Node();

  constructor(root) {
    this.root = root || this.root;
  }

  get preOrder() {
    return this.root? this.root.preOrder : null;
  }

  get inOrder() {
    return this.root? this.root.inOrder : null;
  }

  get postOrder() {
    return this.root? this.root.postOrder : null;
  }

  get d3() {
    return this.root ? this.root.d3 : null;
  }
}

export default Tree;
