var i=0,j=0;
for(i=1;i<=4;i++){
     var s="";
     var c=65;
     
    for(j=0;j<i;j++){
        s=s+String.fromCharCode(c);
        c++;

    }
    console.log(s+"\n");
    
}