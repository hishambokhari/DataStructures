// Add two numbers

var addTwoNUmbers = function(l1,l2) {
  let dummyHead = new ListNode(0);
  let pointer1 = l1;
  let pointer2 = l2;
  let current = dummyHead;
  let carry = 0;

  while (pointer1 !== null || pointer2 !== null ){
    let x = (pointer1 !== null) ? pointer1.val : 0;
    let y = (pointer2 !== null) ? pointer2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum/10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (pointer1 !== null){
      pointer1 = pointer1.next
    }

    if (pointer2 !== null){
      pointer2 = pointer2.next
    }
  }

  if (carry > 0) {
    current.next  = new ListNode(1);
  }

  return dummyHead.next;
};

console.log(addTwoNUmbers([2,4,3],[5,6,4]))