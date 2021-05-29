/*Check if a key is present in every segment of size k in an array
 
Given an array arr[] and size of array is n and one another key x, and give you a segment size k. 
The task is to find that the key x present in every segment of size k in arr[].*/

function findMax(arr, x, k, n) {
    debugger;
    // yha arr jo array h hmare pas vo h
    // k yha pe vo sub parts h jitne bar hum is array ko divide kr payeinge
    // x humari vo key value jo hume find krni h ki sub arrays m present hogi ki nhi
    // n is the length of array
    let j, i;
    for (i = 0; i < n; i = i + k) {
        for (j = 0; j < k; j++) {
            if (arr[i + j] == x)//yha pe i+j isliye kiya h qki 3-3 ka sb-array create krna hota h
                break;
        }
        if (j === k)
            return false;
    }

    // If n is a multiple of k
    if (i == n)
        return true;


    // Check in last segment if n
    // is not multiple of k.
    for (j = i - k; j < n; j++)
        if (arr[j] == x)
            break;
    if (j == n)
        return false;

    return true;

}




let arr = [3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3];
let x = 3, k = 3;
let n = arr.length;
if (findMax(arr, x, k, n))
    console.log("Yes");
else
    console.log("No");