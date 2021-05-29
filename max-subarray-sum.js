//here this is one way to finding the answer but as we saw there are more than 2loops are present jst only to find subarray
//Now to reduce this we decrease the sub-array that is we can convert 3loops into 2loops
function SubArray(){
    let a = [-1,4,7,2];
    let l = a.length;
    let max_sum=0;
    for(let i=0; i<l; i++){//we write this loop to jst take the start point
        for(let j=i; j<l; j++){
            let sum=0;//we write this point to take the ending point
            for(let k=i; k<=j; k++){//this loop is present to print all the elements of array in between the start and end element
               process.stdout.write(a[k].toString() + " ");
               sum += a[k];
            }
            max_sum = Math.max(max_sum,sum);
        }
    }

    console.log(max_sum);
}

SubArray();
