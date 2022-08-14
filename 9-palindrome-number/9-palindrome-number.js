/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    x=x.toString();
    x1=x.split('').reverse();
    x1=x1.join('');
    return x===x1;
    
};
