// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// Example 2:

// Input: citations = [1,3,1]
// Output: 1

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length === 1){
        return citations[0]
    }
    let hIndex = 0
    const sorted = citations.sort((a,b) => a - b)
    const half = Math.ceil(citations.length / 2);    
    const firstHalf = citations.slice(0, half)
    const secondHalf = citations.slice(half)

    for(var i=0; i<firstHalf.length; i++){
        if(firstHalf[i] < secondHalf[0]){
            hIndex = firstHalf[i]
        }
    }

    for(var k=0; k<secondHalf.length; k++){
            for(var j=0; j<secondHalf.length; j++){
                if(
                    secondHalf[k] < secondHalf[j] && 
                    secondHalf.lastIndexOf(secondHalf[j]) === secondHalf[secondHalf.length -1] && 
                    secondHalf.length === firstHalf.length
                ){
                hIndex = secondHalf[k]
                }
            }
    }
    console.log(firstHalf)
    console.log(secondHalf)
    return hIndex
}