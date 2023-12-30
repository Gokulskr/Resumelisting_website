function hello(){
    let pass=document.getElementById("data").value;
    let upper=0;
    let lower=0;
    let number=0;
    let special=0;
    for(let i=0;i<pass.length;i++)
    {
        if('A'<=pass[i]&&'Z'>=pass[i])
        {
            upper++;
        }
        else if('a'<=pass[i]&&'z'>=pass[i])
        {
            lower++;
        }
        else if('0'<=pass[i]&&'9'>=pass[i])
        {
            number++;
        }
        else{
            special++;
        }
            
    }
    if(8<=pass.length&& 16>=pass.length && upper>=1 && lower>=1 && special>=1 && number>=1){
        document.getElementById("result").innerHTML="strong password";
        document.getElementById("result").style.color="green";
    }
    else{
        document.getElementById("result").innerHTML="weak password";
        document.getElementById("result").style.color="red";
    }
}
