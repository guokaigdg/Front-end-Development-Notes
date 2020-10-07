const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};
var maxDepth1 = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth1(root.left) + 1, maxDepth1(root.right) + 1);
};

var maxDepth = function (root) {
  if (root === null) return 0;
  let deep = 0;
  let tree = [];
  tree.push(root);
  while (tree.length) {
    deep++;
    let len = tree.length;
    for (let i = 0; i < len; i++) {
      let node = tree.shift();
      node.left && tree.push(node.left);
      node.right && tree.push(node.right);
    }
  }
  return deep;
};
console.log(maxDepth1(root));
console.log(maxDepth(root));
