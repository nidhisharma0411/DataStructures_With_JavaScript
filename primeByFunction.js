function PrimeByFunction(n1,n2){
    for(let j=n1;j<=n2;j++)
    {
        if(isPrime(j))
        console.log(j.toString());
    }
}

function isPrime(n1)
{
    for(let i=2;i<=Math.sqrt(n1);i++)
    {
        if(n1%i === 0)
        return false;
    }
     return true;
}

PrimeByFunction(2,100);

// Output

// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97