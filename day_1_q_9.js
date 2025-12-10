var i=0,j=0,x=0,y=0;
for(i=0;i<5;i++){
     var s="";
     if(i%2==0){
        x=3;
        y=0;
     }
     else{
        x=2;
        y=1;
     }
     for(k=0;k<y;k++)
     {
        s=s+" ";
     }
    for(j=0;j<x;j++){
        s=s+"*"+" ";

    }
    console.log(s+"\n");
    
}