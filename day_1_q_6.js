var i=0,j=0,k=0,b=3,c=1;
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
    
}for(i=5;i>=1;i=i-2){
     var st="";
     for(k=1;k<=c;k++){
        st=st+" ";
     }
     c=c+1;
     
    for(j=0;j<i;j++){
        st=st+"*";

    }
    
    console.log(st+"\n");
    
}