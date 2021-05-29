function kadane(a,l){
    let currentSum = 0;
    let max_sum = 0
    for(i=0;i<l;i++){
        currentSum += a[i];
        if(currentSum < 0 ){
            currentSum = 0;
        }
        max_sum = Math.max(max_sum,currentSum);
    }
    return max_sum;
}

function MaximumCircularSubarraySum(){
    debugger;
    let a = [4,-4,6,-6,10,-11,12];
    let l = a.length;
    let wrapSum = 0;
    let nonWrapSum = 0;
    nonWrapSum = Kadane(a,l);

    let total_sum = 0;
    for(let i=0; i<l; i++){
        total_sum += a[i];
        a[i] = -a[i];
    }

    wrapSum = total_sum + kadane(a,l);//here the kadane algo helps us to return the sum of non-contributing element
    let compareSum = Math.max(wrapSum,nonWrapSum);
    console.log(compareSum.toString());
}


MaximumCircularSubarraySum()