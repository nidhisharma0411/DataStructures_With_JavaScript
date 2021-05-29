function LinearSearch(){
    let array = [33,78,99,12,13,80];
    let ele = 99, location;
    for(let i=0; i<array.length; i++){
        if(ele === array[i]){
            location = i;
        }
    }
    console.log(`element is on location = ${location}`);
}

LinearSearch();