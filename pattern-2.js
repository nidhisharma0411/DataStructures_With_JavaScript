function Pattern2(){
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            process.stdout.write(j.toString());
        }
        process.stdout.write('\n');
    }
}

Pattern2();

// Output:-
// 1
// 12
// 123
// 1234
// 12345