var c=0,i=0,n=0;
function checkprime(n){
    for(i=2;i<=n;i++){
        if(n%i==0)
        {
            c=c+1;
        }
    }
    if(c==1){
        console.log(n+" is a prime number");
    }
    else{
        console.log(n+" is not a prime number");
    }
}
var num=17;
checkprime(num);