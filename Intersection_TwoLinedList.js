/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let n =0;
    let m =0;
    let PA = headA;

    while(PA)
    {
        n++;
        PA = PA.next;

    }

  let PB = headB;
    while(PB)
    {
        m++;
        PB= PB.next;
    }

    let diff = Math.abs(n-m);
    if(n > m)
    {
        let temp =headA;
        headA = headB;
        headB = temp;
    }


    for(let i = 0;i < diff ;i++)
    {
headB = headB.next;
    }

    PA = headA;
    PB = headB;

    while(PA != PB)
    {
        PA = PA.next;
        PB = PB.next;
    }

    return PA;
};