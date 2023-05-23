class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  addChild(tree) {
    if (tree.value < this.value) {
      if (this.left) {
        this.left.addChild(node);
      } else {
        this.left = tree;
      }
    } else {
      if (this.right) {
        this.right.addChild(node);
      } else {
        this.right = tree;
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    var result = false;
    if (value > this.value) {
      if (this.right) {
        return this.right.contains(value);
      }
      return false;
    }
    if (this.left) {
      return this.left.contains(value);
    }
    return false;
  }

  forEach(func) {
    func(this.value);
    if (this.left) {
      this.left.forEach(func);
    }
    if (this.right) {
      this.right.forEach(func);
    }
  }
}