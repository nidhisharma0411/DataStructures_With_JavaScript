function PalindromePattern(){
    let n=5;
    let j,k;
    for(let i=1;i<=n;i++)
    {
       
       for(j=1; j<n-i; j++)
       {
           process.stdout.write(' ');
       }
       k=i;
       for(;j<n;j++)
       {
           k--;
           process.stdout.write(k.toString());
       }
       k=2;
       for(;j<=n+i-1;j++)
       {
           k++;
           process.stdout.write(k.toString());
       }

       process.stdout.write('\n');
    }
}

PalindromePattern();