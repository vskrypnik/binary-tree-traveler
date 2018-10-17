class Node {
  left  = null;
  right = null;
  value = null;

  constructor(data = {}) {
    this.left  = data.left  || this.left;
    this.right = data.right || this.right;
    this.value = data.value || this.value;
  }

  get preOrder() {
    const chunks = [];

    [this.value, this.left, this.right].forEach(e => {
      if (e) chunks.push(e instanceof Node ? e.preOrder : e);
    })

    return chunks.join(" ");
  }

  get inOrder() {
    const chunks = [];

    [this.left, this.value, this.right].forEach(e => {
      if (e) chunks.push(e instanceof Node ? e.inOrder : e);
    });

    return chunks.join(" ");
  }

  get postOrder() {
    const chunks = [];

    [this.left, this.right, this.value].forEach(e => {
      if (e) chunks.push(e instanceof Node ? e.postOrder : e);
    });

    return chunks.join(" ");
  }

  get d3() {
    const d3 = { name: this.value, children: [] };

    [this.left, this.right].forEach(e => {
      if (e) d3.children.push(e instanceof Node ? e.d3 : e);
    });

    return d3;
  }
}

export default Node;
