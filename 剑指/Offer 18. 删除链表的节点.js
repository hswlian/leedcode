// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 注意：此题对比原题有改动

// 示例 1:

// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
// 示例 2:

// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
   //如果在链表头部删除其头部那么直接head.next
   if (head.val === val) return head.next;
   let pre = head;
   let cur = head.next;
   while (cur !== null && cur.val !== val) {
       pre = cur;
       cur = cur.next;
   }
   if (cur && cur.val === val) pre.next = cur.next;
   return head;
};
console.log(`======= result:${JSON.stringify(deleteNode({val: 4, next: {val: 5, next: {val: 3, next: {val: 9, next: null}}}}, 1))}`)