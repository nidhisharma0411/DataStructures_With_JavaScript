function pattern(){
    let row=5;
    for(let i=1; i<=row; i++)
    {
        for(let j=1; j<=i; j++)
        {
            if((i+j)%2===0)
            {
                process.stdout.write('1');
            }
            else
            {
                process.stdout.write('0');
            }
        }
        process.stdout.write('\n');
    }
}

pattern();

// OutPut:-
// 1
// 01
// 101
// 0101
// 10101