/*basically hum is program m pehle to array ko subarray m divide kr rhe hote h phir hr ek subaaray m jo bhi
total words hote h unka sum kr rhe hote h to ye basic task hota h humare subarray ko create krne ka*/


function SubArraySum(){
    let a = [1,2,0,7,2];
    let sum = 0;
    for(let i=0; i<a.length; i++)
    {
        sum = 0;
        for(let j=i; j<a.length; j++){
             sum += a[j];
             console.log(sum);
        }
    }
}

SubArraySum();

// Output:-
// 1
// 3
// 3
// 10
// 12
// 2
// 2
// 9
// 11
// 0
// 7
// 9
// 7
// 9
// 2