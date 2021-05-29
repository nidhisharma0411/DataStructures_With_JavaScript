function Pyramid(){
   let row=5;
   for(var i=1; i<=row; i++){
       for(let j=1; j<=i; j++)
       {
          process.stdout.write(i.toString());
       }
       process.stdout.write('\n');
   }
}

Pyramid();


//output
// 1
// 22
// 333
// 4444
// 55555