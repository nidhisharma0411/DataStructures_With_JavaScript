function pattern1(){
   for(let i=0;i<=5;i++){
       for(let j=0; j<i; j++){
           process.stdout.write(i.toString());
       }
       process.stdout.write('\n');
   }
}

pattern1();

// OutPut:-
// 1
// 22
// 333
// 4444
// 55555