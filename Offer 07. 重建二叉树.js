// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

//  

// 示例 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// 示例 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
//  

// 限制：

// 0 <= 节点个数 <= 5000

/**
 * 考点：二叉树的解析
 * ============ 思路 ===========
 * （1）根据 前序遍历的结果 确定根节点 
 * （2）根据根节点 ，将后序遍历的结构 分为左子树 和右子树
 * （3）递归查找左子树的根节点和右子树 的根节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {

};
