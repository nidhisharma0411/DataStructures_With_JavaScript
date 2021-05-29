function SelectionSort() {
    let a = [12, 14, 18, 33, 2, 1];
    let len = a.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            //this code is as similar as swapping of two numbers by using 3rd variable
            if (a[j] < a[i]) {
                let temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }
    for(let i=0; i<len; i++){
        console.log(a[i]);
    }
}

SelectionSort();