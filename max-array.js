function findMax(){
    let array = [1,2,4,56,78,11];
    let max_number = array[0];
    let min_number = array[0];
    console.log(max_number);
    for(let i=0;i<=array.length;i++)
    {
      if(array[i] > max_number)
       max_number = array[i];
      if(array[i] < min_number)
       min_number = array[i];
    }
    console.log(`Bigger number is: ${max_number}`);
    console.log(`smaller number is: ${min_number}`);
}

findMax();