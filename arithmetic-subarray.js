function ArithmeticSubarray(){
     let a = [10,7,4,6,8,10,11];

     let ans = 2; //by default aray length 2 to hogi hi 2 element ka array to hoga hi
     let pd = a[1]-a[0];
     let curr = 2;

     for(let j = 2; j<a.length; j++){
         if(pd == a[j]-a[j-1]){
             curr++;
         }
         else{
             pd = a[j] - a[j-1];
             curr = 2;
         }
         ans = Math.max(ans,curr);
     }

     console.log(ans);
}

ArithmeticSubarray();