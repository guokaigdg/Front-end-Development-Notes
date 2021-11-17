//https://leetcode-cn.com/problems/sum-of-left-leaves/

var sumOfLeftLeaves = function (root) {
  let number = 0;
  const sum = (root) => {
    //边界条件
    if (root === null) {
      return;
    }
    //是左叶子节点
    if (root.left && !root.left.left && !root.left.right) {
      number = number + root.left.val;
    }
    //不是左叶子节点
    sum(root.left);
    sum(root.right);
  };
  sum(root);
  return number;
};

const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
sumOfLeftLeaves(root);
