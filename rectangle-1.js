function pattern1(){
    for(let i=1;i<=5;i++)
    {
        for(let j=1; j<=4; j++)
        {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}

pattern1();

// Output
// ****
// ****
// ****
// ****
// ****