// function ButterflyPattern(){
//     let row=4;
//     for(let i=1; i<=4; i++)
//     {
//         for(let j=1; j<=i; j++)
//         {
//             process.stdout.write('*');
//         }
//         let space=2*row-2*i;
//         for(let k=1; k<=space; k++)
//         {
//             process.stdout.write(' ');
//         }
//         for(let j=1; j<=i; j++)
//         {
//             process.stdout.write('*');
//         }

//         process.stdout.write('\n');
//     }
// }

// ButterflyPattern();


function ButterflyPattern(row,col){
    for(let i=col; i<=row; i++)
    {
        for(let j=col; j<=i; j++)
        {
            process.stdout.write('*');
        }
        let space=2*row-2*i;
        for(let k=col; k<=space; k++)
        {
            process.stdout.write(' ');
        }
        for(let j=1; j<=i; j++)
        {
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }

    for(let i=row; i>=col; i--)
    {
        for(let j=col; j<=i; j++)
        {
            process.stdout.write('*');
        }
        let space=2*row-2*i;
        for(let k=col; k<=space; k++)
        {
            process.stdout.write(' ');
        }
        for(let j=1; j<=i; j++)
        {
            process.stdout.write('*');
        }

        process.stdout.write('\n');
    }

}

ButterflyPattern(4,1);


// OutPut
// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *