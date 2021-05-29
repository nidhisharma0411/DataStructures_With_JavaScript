function SubArray(){
    let a = [-1,4,7,2];
    let l = a.length;
    for(let i=0; i<l; i++){//we write this loop to jst take the start point
        for(let j=i; j<l; j++){//we write this point to take the ending point
            for(let k=i; k<=j; k++){//this loop is present to print all the elements of array in between the start and end element
               process.stdout.write(a[k].toString() + " ");
            }process.stdout.write('\n');
        }
    }
}

SubArray();