/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr=s.trim().split(" ")
    const last = arr.pop()
    return last.length    
};

