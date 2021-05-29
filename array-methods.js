//1. foreach method basically this method is used to display the list of all elements in our array

function ForEach(){
    arr = [33,16,27,89,90];
    arr.forEach(element => {
        console.log(element)
    });
}

ForEach();

//2. includes() basically this method is used to know that wether the element is present in the array or not

function Include(){
    arr = [33,16,27,89,90];
    console.log(arr.includes(33));
    console.log(arr.includes(40));
}

Include();

/*Filter this method is used to return the value of array by using this method we filter the array value on the basis of that condition*/
// and it is like a filter the element and the filter method is the part of arrow method also
function Filter(){
    arr = [33,16,27,89,90];
    console.log(arr.filter(element => element > 30));
}

Filter();


// map() this method create new array by calling the provided function in every element
// jitne element array m hote hn hume utne hi element return krta h
function Mapp(){
    arr = [33,16,27,89,90];
    arr1 = arr.map(element => element+1);
    console.log(arr);
    console.log(arr1);
}

Mapp();


// reduce() this method is used when we have to play both filter and map together and we can able to get single value in answer by using this method

function Reduce(){
    arr = [33,16,27,89,90];
    let ans = arr.reduce((total,value)=> total+value, 0);
    console.log(ans);
}

Reduce();


// some() this is used to display that even though any of the condition is passed so we can use this method

function Some(){
    arr = [22,16,27,89,90];
    const largeNum = arr.some(num => num > 16);
    console.log(largeNum);

    const smallNum = arr.some(num => num < 50);
    console.log(smallNum);
}

Some();

// sort() it is the built-in method which we used to sort the array by using this we can get the array in sorted format


// .from() ye method same instance type ka array mujhe return krega
// ye hmari koi bhi string ko ek array k format m return krdega

function From(){
    const a = 'Vscode';
    const nameArray = Array.from(a);
    console.log(a);
    console.log(nameArray);
}

From()

 // .of() this method is used to convert the distributed values into a single array

function ArrayOf(){
   const number = Array.of(1,3,4,6,7,8);
   console.log(number);
}

ArrayOf()