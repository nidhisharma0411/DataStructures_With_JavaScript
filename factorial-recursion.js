function factorial(number){
   if(number===1){
    return 1;
   }
   else
    return number*factorial(number-1);
}

var fact = factorial(4);
console.log(fact);