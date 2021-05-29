function rhombusPattern(){
   let row = 5;
   for(let i=1; i<=5; i++)
   {
       //yha matter ye krta h ki hmari ek row ka space upcoming row number or total row number k bich ka h
       let space = row-i;
      for(let j=1; j<=space; j++)
      {
          process.stdout.write(' ');
      }
      for(let k=1; k<=row; k++)
      {
          process.stdout.write('*');
      }
      process.stdout.write('\n');
   }
}

rhombusPattern();

// Output
//     *****
//    *****
//   *****
//  *****
// *****