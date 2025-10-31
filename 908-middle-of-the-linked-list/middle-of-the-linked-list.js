/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let backupHead = head

    let listLength = 0
    while (head !== null) {
        head = head.next
        listLength++
    }

    let result = null
    for(let i = 0; i<=listLength/2; i++){
        result = backupHead
        backupHead = backupHead.next
    }

    return result
};