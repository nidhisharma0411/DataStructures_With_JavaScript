function Pattern(){
   let row=5;
   for(let i=1; i<=5; i++){
       for(let j=1; j<=5; j++){
           if(j<=row-i)
            process.stdout.write(' ');
           else
            process.stdout.write('*');
       }
       process.stdout.write('\n');
   }
}
Pattern();


// Output
//     *
//    **
//   ***
//  ****
// *****