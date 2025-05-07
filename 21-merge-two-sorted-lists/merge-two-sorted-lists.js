/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

var mergeTwoLists = function (list1, list2) {

    let dummy = new Node(0)
    let current = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if (list1) {
        current.next = list1
    } else if (list2) {
        current.next = list2
    }

    return dummy.next
};