function Pattern(){
    let row=5, col=4;
    for(let i = 1; i<=row; i++)
    {
        for(let j = 1; j<=col; j++)
        {
            if(i===1 || i===row || j===1 || j===col)
              process.stdout.write('*');
            else 
            process.stdout.write(' ');
        }
        process.stdout.write('\n');
    }
}

Pattern();

// Output
// ****
// *  *
// ****