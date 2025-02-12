/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    class ListNode{
        constructor(val,next = null){
            this.val = val
            this.next = next
        }
    }

    function listToArray(list){
        let arr = []
        while(list){
            arr.push(list.val)
            list = list.next
        }
        return arr
    }

    function arrToList(arr){
        if(arr.length == 0){
            return null
        }

        let head = new ListNode(arr[0])
        let current = head

        for(let i=1; i<arr.length; i++){
            current.next = new ListNode(arr[i])
            current = current.next
        }

        return head
    }

    let l1Arr = listToArray(l1).reverse()
    let l2Arr = listToArray(l2).reverse()

    l1Num = BigInt(l1Arr.join(''))
    l2Num = BigInt(l2Arr.join(''))

    const result = l1Num + l2Num

    const resultArr = result.toString().split("").map(Number).reverse()

    return arrToList(resultArr)
};