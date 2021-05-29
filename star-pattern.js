function starPattern(){
    let n=4;


    //this code is for upper part of our star
    for(let i=1; i<=4; i++)
    {
        for(let j=1; j<=n-i; j++)
        {
            process.stdout.write(' ');
        }
        for(let k=1; k<=2*i-1; k++)
        {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }


    //this code is for lower part of our star
    for(let i=4; i>=1; i--)
    {
        for(let j=1; j<=n-i; j++)
        {
            process.stdout.write(' ');
        }
        for(let k=1; k<=2*i-1; k++)
        {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}

starPattern();

//Output
//    *
//   ***
//  *****
// *******
// *******
//  *****
//   ***
//    *