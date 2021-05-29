function factorial(number)
{
    let ans=1;
    for(i=1;i<=number;i++)
    {
        ans = ans*i;
    }
    return ans;
}

function PascalTriangle(row){
   for(let i=0; i<row; i++){
       for(let j=0; j<=i; j++)
       {
           let digit = factorial(i)/(factorial(j)*factorial(i-j));
           process.stdout.write(digit.toString());
       }
       process.stdout.write('\n');
   }
}

PascalTriangle(5);


// Output:-
// Actually the position represent the binary coefficients of that number


// 1
// 11
// 121
// 1331
// 14641