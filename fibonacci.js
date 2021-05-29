function fibonacci(){
    let num=5;
    let t1=0;
    let t2=1;
    let nextTerm;

    for(let i=1;i<=num;i++)
    {
       console.log(t1.toString());
       nextTerm=t1+t2;
       t1=t2;
       t2=nextTerm;
    }
}

fibonacci();