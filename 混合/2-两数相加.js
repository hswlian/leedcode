// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// let l1 = [d ,e, f]


var addTwoNumbers = function(l1, l2) {
    let w = 0;   // 某级层是否有进，进多少
    let preNode = null
    let l3 = null;
    // 这里注意 w 不等于 0
    while (l1 || l2 || w !== 0) {
        let value = (l1?.val || 0 )+ (l2?.val || 0) + w // 第一步：链表相应的位置，两位相加
        
        let val = value % 10 // 第二步: 相加值 除以 10 ，取余
        
        w = Math.floor(value / 10)  // 第三步： 相加值 除以 10 ，取整
        
        let nowNode = new ListNode(val, null);
        
        if (preNode) {
            preNode.next = nowNode
        } else {
            l3 = nowNode
        }
        
        preNode = nowNode
        
        l1 = l1?.next;
        l2 = l2?.next;
        
    }
    return l3
};

let a = new ListNode(2, new ListNode(4, new ListNode(3)))
let b = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(a , b))