// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

//  

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]
//  

// 限制：

// 0 <= 链表长度 <= 10000

/**
 * 考点：遍历链表
 * ====================== 思路 ========================
 * 方法一：第一步，从 前到后 遍历 这个链表，将 节点的 value 存在 栈 arr 内。第二步，输出 这个栈。 时间复杂度 O（n）
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = [];

    // let h = JSON.parse(JSON.stringify(head))

    while(head){
        arr.push(head.val);
        head = head.next;
    }

    arr.reverse();

    return arr
};

console.log(`======= result:reversePrint({val: 'node1', next: {val: 'node2', next: {val: 'node3', next: null}}})`)