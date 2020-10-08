// 解题思路
// 搜索二叉树最后正好是个一个中序遍历的状态
// 中序遍历
// 判断数组是否为升序

const root = {
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: { val: 3, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};

var isValidBST = function (root) {
  if (root == []) {
    return true;
  }
  let res = [];
  const levelOrder = (root) => {
    if (!root) return;
    root.left && levelOrder(root.left);
    root && res.push(root.val);
    root.right && levelOrder(root.right);
  };
  levelOrder(root);
  for (let i = 0; i < res.length; i++) {
    if (res[i] >= res[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(isValidBST(root));
