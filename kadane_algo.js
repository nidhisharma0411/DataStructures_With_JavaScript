//Kadane algorithm this algo is used to givr o(n) complexity fro max-subarray-problem

function MaximumSubarraySum(){
    let a = [-1,4,-6,7,-4];
    let l = a.length;
    let currentSum = 0;
    let maxSum = 0;
    for(let i=0; i<l; i++){
        currentSum += a[i];
        if(currentSum < 0)
        {
            currentSum = 0;
        }
        maxSum = Math.max(maxSum,currentSum);
    }
    
    console.log(maxSum.toString());
}

MaximumSubarraySum();

// Output:-
// 7