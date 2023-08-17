/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) {
        return false;
    }
    const map={}
    for( i in s){
        if(!map[s[i]]) map[s[i]]=1
        else map[s[i]]++
    }
    console.log(map)
    
    for( i in t){
        if(map[t[i]]) map[t[i]]--
    }
        console.log(map)

    for( i in map){
        if(map[i]!=0) return false 
    }
    
    return true
    
    
    
};