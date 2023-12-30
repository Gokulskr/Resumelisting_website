function number(){
    let num=document.getElementById("number").value;
    if (num%2==0){
        document.body.style.backgroundColor="red";

    }
    else if(num%3==0){
        document.body.style.backgroundColor="blue";

    }
    else
        document.body.style.backgroundColor="violet";
       

    
}