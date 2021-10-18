// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

//  

// 示例 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// 示例 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 考点：考察树的遍历
 * 思路：
 * (1) 创建一个树，树的根结点是 TreeNode(preorder[0])，这个 节点在中序遍历中的位置 是 index = inorder.indexOf(inorder[0])
 * (2) 这个树的 左子树 的 中序遍历 是 inorder.slice(0 , index)
 * (3) 这个树的 左子树 的 前序遍历 是 preorder.slice(1 , index)
 * (4) 这个树的 右子树 的 中序遍历 是 inorder.slice( index + 1 , inorder.length -1)
 * (5) 这个树的 左子树 的 前序遍历 是 preorder.slice( index + 1 , inorder.length -1)
 * (6) 递归 左子树，右子树， 最后返回这个树。
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    const tree = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0]);
    tree.left = buildTree(preorder.slice(1 , index + 1),  inorder.slice(0 , index));
    tree.right = buildTree(preorder.slice( index + 1),  inorder.slice( index + 1))
    return tree
};
