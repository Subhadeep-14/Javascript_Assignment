var i=0,j=0,k=0,b=3;
for(i=1;i<=7;i=i+2){
     var s="";
     for(k=b;k>0;k--){
        s=s+" ";
     }
     b=b-1;
     
    for(j=0;j<i;j++){
        s=s+"*";

    }
    console.log(s+"\n");
    
}