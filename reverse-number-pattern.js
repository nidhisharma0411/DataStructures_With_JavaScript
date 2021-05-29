function reversepattern(){
    let row=5;
    for(let i=1; i<=row; i++)
    {
        //because here we have to remember that how much the element we need to print
        for(let j=1; j<=(row+1-i); j++)
        {
            process.stdout.write(j.toString());
            process.stdout.write(' ');
        }
        process.stdout.write('\n');
    }
}

reversepattern();

// Output
// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1 2 
// 1