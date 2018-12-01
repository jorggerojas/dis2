window.addEventListener('load', cargar(1), true);
function cerrarSesion(){
    localStorage.removeItem('1drDS4U0C');
    window.location='login.html';
}

function cargar(index){
    btnSig = document.getElementById('sig');
    switch(index){
        case 1:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                i = 0;
                document.getElementById('lista').innerHTML = "";
                while(i < 40){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                } 
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                atras = document.getElementById('atras');
                if(atras != null){
                    atras.remove();
                }
            }
            
        }
        break;

        case 2:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }            
                
                i = 41;
                while(i < 81){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 3:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 82;
                while(i < 122){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 4:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 123;
                while(i < 163){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 5:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 164;
                while(i < 204){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 6:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 205;
                while(i < 245){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 7:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }      
                i = 246;
                while(i < 286){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 8:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 287;
                while(i < 327){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 9:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 328;
                while(i < 368){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 10:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 369;
                while(i < 409){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 11:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }    
                i = 410;
                while(i < 450){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 12:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 451;
                while(i < 491){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 13:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 492;
                while(i < 532){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 14:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 533;
                while(i < 573){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 15:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 574;
                while(i < 614){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 16:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 615;
                while(i < 655){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 17:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   ;    
                i = 656;
                while(i < 696){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 18:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }     
                i = 697;
                while(i < 737){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 19:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 738;
                while(i < 778){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 20:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }      
                i = 779;
                while(i < 819){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 21:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 820;
                while(i < 860){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 22:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 861;
                while(i < 901){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 23:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 902;
                while(i < 942){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 24:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 943;
                while(i < 983){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 25:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 948;
                while(i < 988){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 26:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 989;
                while(i < 1029){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 27:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }      
                i = 1030;
                while(i < 1070){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 28:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 1071;
                while(i < 1111){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 29:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }       
                i = 1112;
                while(i < 1152){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 30:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }      
                i = 1153;
                while(i < 1193){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 31:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }   
                i = 1194;
                while(i < 1234){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 32:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                counter = parseInt(index)+1;
                boton.setAttribute('onclick', "cargar("+counter+")");
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }      
                i = 1235;
                while(i < 1275){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        case 33:
        data = new XMLHttpRequest();
        data.open('GET', 'https://pfdis2.herokuapp.com/deudores/');
        data.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data.send();
        data.onreadystatechange = function(){
            if(data.readyState == 4 && data.status == 200) {
                d = JSON.parse(data.responseText);
                document.getElementById('lista').innerHTML = "";
                document.getElementById('pag').innerText = index+" de 33";       
                boton = document.getElementById('sig');
                div = document.getElementById('botones');
                if(document.getElementById('atras') != null){
                    document.getElementById('atras').remove();
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                
                    btnAtras.setAttribute("onclick", "cargar("+decounter+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }else{
                    btnAtras = document.createElement("BUTTON");
                    btnAtras.setAttribute("id", 'atras');
                    decounter = (parseInt(index)-1);                               
                    btnAtras.setAttribute("onclick", "cargar("+32+")");
                    btnAtras.innerText="Anterior";
                    div.appendChild(btnAtras); 
                }                
                i = 1276;
                while(i < d.length){
                    din = 
                        "<tr>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Cliente+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Nombre+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].Region+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCon+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                d[i].TelCel+
                            "</td>"+
                            "<td style='border: 1px solid black'>"+
                                "<button onclick='ver("+d[i].Cliente+")'>Ver</button>"+
                            "</td>";
                        "</tr>";
                    document.getElementById('lista').innerHTML+=din;
                    i++;
                }        
            }
            
        }
        break;

        default:
        break;
    }
}

function ver(cliente){
    console.log(cliente);
}