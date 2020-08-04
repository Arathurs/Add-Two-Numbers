var addTwoNumbers = function(l1, l2) {
    
    function createInteger(list) {
        let reversedStr ='';
        
        while(list) {
            reversedStr += list.val;
            list = list.next;
        }
        
        let str = reversedStr.split('').reverse().join(''),
            strInt = parseFloat(str);
        return strInt;
        
    }
    
    let firstInteger = createInteger(l1),
     secondInteger = createInteger(l2),
     integerSum = firstInteger + secondInteger,
     //Here in intSim we chain a few operations. First stringify the integer then reverse the resulting array
     intSim = integerSum.toString().split('').reverse(),
     parentNode = new ListNode(intSim[0]),
            currentNode = parentNode;
        
        for(var i = 1; i < intSim.length; i++) {
            var node = new ListNode(intSim[i]);
            currentNode.next = node;
            currentNode = currentNode.next;
        }
        
    return parentNode;
        
    
    
};