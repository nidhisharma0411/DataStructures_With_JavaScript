function MaxTillI(){
    let a = [1,0,5,4,6,8];
    let l = a.length;
    let arr = [];
    for (let j = 0; j < l-1; j++) {
        //this code is as similar as swapping of two numbers by using 3rd variable
       let max_number = Math.max(a[j],a[j+1]);
       arr.push(max_number);
    }

    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i].toString());
    }
} 

MaxTillI();


// Output:-
// dono jo bhi variables chl rhe h unme se maximum ky h
// 1
// 5
// 5
// 6
// 8