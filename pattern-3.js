function pattern3(){
    let count = 0;
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write((count++).toString() + " ");
        }
        process.stdout.write('\n');
    }
}

pattern3();

// Output:-
// 0 
// 1 2
// 3 4 5
// 6 7 8 9
// 10 11 12 13 14