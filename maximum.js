function maximum(){
    let a=20;
    let b=14;
    let c=18;
    if(a>b)
    {
      if(a>c)
        console.log('a is largest=' + a);
      else
        console.log('c is largest=' +c);
    }
    else
    {
        if(b>c)
         console.log('b is largest='+b);
        else
         console.log('c is largest='+c)
    }
}

maximum();