function SecondLargest(){
    let array = [1,3,4,6,10,12,33];
    let largestNumber = array[0];
    let secondLargest = array[0];
    for(let i=0; i<array.length; i++)
    {
        if(array[i]>largestNumber)
        {
           secondLargest = largestNumber;
           largestNumber = array[i];
        }
        else if(array[i]>secondLargest)
        {
            secondLargest=array[i];
        }
    }

    console.log(`second largest number is = ${secondLargest}`);
}

SecondLargest();