function factorial(number)
{
    let ans=1;
    for(i=1;i<=number;i++)
    {
        ans = ans*i;
    }
    return ans;
}

function Permutation(per,com){
    let permutation = 1;
    permutation = factorial(per)/(factorial(com)*factorial(per-com));

    console.log(permutation);
}

Permutation(6,2);


// output

// 15