function BubleSort() {
    let a = [12, 14, 18, 33, 2, 1];
    let len = a.length;
    let counter = 1;
    while (counter < len) {
        for (let i = 0; i < len - counter; i++) {
            //this code is as similar as swapping of two numbers by using 3rd variable
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
            }
        }
        counter++;
    }
    for (let i = 0; i < len; i++) {
        console.log(a[i]);
    }
}



BubleSort();