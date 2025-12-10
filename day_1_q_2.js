var i=0,j=0;
for(i=0;i<4;i++){
     var s="";
     
    for(j=0;j<4;j++){
        if(i==0||i==3)
        {
        s=s+"*";
        }
        else
        {
            if(j==0||j==3)
            {
                s=s+"*";
            }
            else
            {
                s=s+" ";
            }       
        }

    }
    console.log(s+"\n");
    
}