function login(){
    let database = {0:['Gokulskr1','Srigokul@1'],1:['Vijay1','Srigokul@1'],2:['ajith','Srigokul@1'],3:['hari','hari@1']};
    let user_name=document.getElementById('user_name').value;
    let password=document.getElementById('password').value;
    let flag=false;
    for(let i=0;i<Object.keys(database).length;i++){
        if(user_name==database[i][0]){
            if(password==database[i][1]){
                flag=true;
                break;
            } else {
                flag=false;
            }
        }
    }
    if(flag==true){
        window.location.href="https://www.google.com";
    }else{
        document.getElementById('result').innerHTML="invalid username or password";
        document.getElementById('result').style.color='red';
    }
}
