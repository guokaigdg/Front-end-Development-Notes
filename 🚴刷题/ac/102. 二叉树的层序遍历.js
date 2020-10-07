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
var levelOrder = function (root) {
  if (root == null) return [];
  let deepArray = [];
  let tree = [];
  let res = [];
  tree.push(root);
  while (tree.length) {
    let len = tree.length;
    deepArray = [];
    for (let i = 0; i < len; i++) {
      let node = tree.shift();
      if (node.val !== null) deepArray.push(node.val);
      node.left && tree.push(node.left);
      node.right && tree.push(node.right);
    }
    res.push(deepArray);
  }
  return res;
};
console.log(levelOrder(root));
