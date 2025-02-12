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
var reverseList = function (head) {

    class Node {
        constructor(val, next = null) {
            this.val = val
            this.next = next
        }
    }

    function listToArr(head) {
        let arr = []
        while (head) {
            arr.push(head.val)
            head = head.next
        }
        return arr
    }

    function arrToList(arr) {
        if (arr.length == 0) {
            return null
        }

        const head = new Node(arr[0])
        let current = head

        for (let i = 1; i < arr.length; i++) {
            current.next = new Node(arr[i])
            current = current.next
        }
        return head
    }

    const resultArr = listToArr(head).reverse()
    return arrToList(resultArr)


};