function Pattern(){
    let row=5;
    let count = 0;
    for(let i=1; i<=row; i++){
        for(let j=1; j<=i; j++)
        {
            count = count+1;
            process.stdout.write(count.toString());
            process.stdout.write(' ');
        }
        process.stdout.write('\n');
    }
}

Pattern();


// Output
// 1 
// 2 3
// 4 5 6 
// 7 8 9 10
// 11 12 13 14 15