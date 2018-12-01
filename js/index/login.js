function login(){
    var user  = document.getElementById('user').value;
    var pa = document.getElementById('pass').value;
    if(user != "" && pass != ""){
        if(!checkSeg(user)){
            var pass = pre_hash(pa);
            link = 'user='+user+'&pass='+pass;
            data =  new XMLHttpRequest();
            data.open('POST', "https://pfdis2.herokuapp.com/agentes/login");
            data.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            //Se envían los datos almacenados en "link"
            data.send(link);
            
            data.onreadystatechange = function(){
                if (data.readyState == 4 && data.status == 200){
                //Se recibe la respuesta y se quita el formato JSON
                    us = JSON.parse(data.responseText);
                    if(parseInt(us) > 0){
                        //localStorage.setItem('1drDS4U0C', pre_hash(us[0]));
                        window.location ="index.html";
                    }else{
                        alert("Datos incorrectos, intente más tarde");
                    }
                }
            }
        }else{
            alert("Datos incorrectos, intenta de otra vez");
        }
    }else{
        alert("Por favor llena los campos para ingresar al sistema.")
    }
}