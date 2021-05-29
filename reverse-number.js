function ReverseNumber(){
    let number=1667;
    let reversenumber = 0;

    while(number > 0)
    {
        let lastDigit;
        lastDigit = number%10;
        reversenumber = reversenumber*10+lastDigit;
        number = Math.floor(number/10);
    }

   console.log(reversenumber);
}


ReverseNumber();

// Output
// number=1667
// answer=7661