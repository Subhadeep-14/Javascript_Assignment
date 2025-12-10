var i=0,j=0,c=0,k=0,x=0;
for(i=1;i<=5;i++){
    
     var s="";
     if((i==1)||(i==5))
     {
     if(i==3){
        k=1;
        c=1

     }
     else{
        c=2;
        k=0;
     }
     for(x=0;x<k;x++)
     {
        s=s+" ";
     }
     
    for(j=0;j<c;j++){
        s=s+"*"+" " ;
        

    }
    }
    else{
        if(i==3){
        c=1
        k=1;

     }
     else{
        c=2;
        k=0;
     }
      for(x=0;x<k;x++)
     {
        s=s+" ";
     }
     
    for(j=0;j<c;j++){
        s=s+"*";
        

    }

    }
    console.log(s+"\n");
    
}