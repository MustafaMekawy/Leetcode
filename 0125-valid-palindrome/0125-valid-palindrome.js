/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newString= s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right=newString.length-1
    let left =0
   while(right>left){
       if(newString[right]!=newString[left]) return false
       left++        
       right--
   }
    return true
    
};