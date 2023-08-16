/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    
    let sum=0    
    let left=0
    for(let i=1;i<=n;i++){
        sum+=i
    }
    
    for(let i=1;i<=n;i++){
        let right=sum-left
        left+=i
        if(left==right) return i
        
    }
    return -1
    
    
    
    
};