function PrimeNumber() {
    let number = 18;
    let div = 2;
    isPrime = true;
    if (number > 2) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime)
          console.log('number is a prime number' + number);
        else 
          console.log('number is not a prime number' + number);
    }
}

PrimeNumber();