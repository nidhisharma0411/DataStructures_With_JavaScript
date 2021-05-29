function Pattern(){
    let row=5;
    let count = 0;
    for(let i=1; i<=5; i++){
        for(let j=1; j<=5; j++){
            if(j<=row-i)
             process.stdout.write(' ');
            else
            {
                count++
                process.stdout.write(count.toString());
            }
            
        }
        process.stdout.write('\n');
    }
 }
 Pattern();