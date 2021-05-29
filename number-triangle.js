function numberPattern(){
    let row = 5;
    for(let i=1; i<=row; i++)
    {
        //this loop is for spacing
        for(let k=1; k<=row-i; k++)
        {
            process.stdout.write(' ');
        }
        //this loop is for printing the count
        for(let j=1; j<=i; j++)
        {
            process.stdout.write(j.toString());
        }

        process.stdout.write('\n');
    }
}

numberPattern();