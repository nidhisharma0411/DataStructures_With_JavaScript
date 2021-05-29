function Pattern(){
   let row=5;
   for(i=1;i<=row;i++)
   {
       for(j=1;j<=i;j++)
       {
           process.stdout.write('*');
       }
       process.stdout.write('\n');
   }
}

Pattern();

// Output
// *
// **
// ***
// ****
// *****