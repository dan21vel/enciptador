function encripta(){
    let txtdesencrip= document.getElementById("txtencripta").value;

    let large= txtdesencrip.length;
    let txtencript= "";

    for (i=0; i < large; i++){
        let arraytxt= txtdesencrip.charAt(i);
        let cadenainter= "";
        let vocal= false;

        if (arraytxt === "a"){ cadenainter= "ai"; }
        else if (arraytxt === "e"){ cadenainter= "enter"; }
        else if (arraytxt === "i"){ cadenainter= "imes"; }
        else if (arraytxt === "o"){ cadenainter= "ober"; }
        else if (arraytxt === "u"){ cadenainter= "ufat"; }
        else { cadenainter= arraytxt; }

        if (txtencript.length == 0) { 
            txtencript= cadenainter; console.log(txtencript);
        }
        else { 
            txtencript= txtencript + cadenainter; console.log(txtencript);
        }
    }
    
    document.getElementById("txtencripta").value= "";
    document.getElementById("txtdesencripta").value= txtencript;
    document.getElementById("txtdesencripta").style= "background: white";
    document.getElementById("btncopiar").style= "display: block";
}

function desencripta(){
    let txtencrptado= document.getElementById("txtencripta").value;
    let large= txtencrptado.length;
    let txtdesencript= "";

    for (i=0; i < large; i++){
        let arraytxt= txtencrptado.charAt(i);
        let cadenainter= "";
        let vocal= false;

        if (arraytxt === "a"){ i= i + 1; vocal= true; }
        if (arraytxt === "e"){ i= i + 4; vocal= true; }
        if (arraytxt === "i"){ i= i + 3; vocal= true; }
        if (arraytxt === "o"){ i= i + 3; vocal= true; }
        if (arraytxt === "u"){ i= i + 3; vocal= true; }

        if (txtdesencript.length == 0) { 
            txtdesencript= arraytxt; console.log(txtdesencript); 
        }
        else { 
            txtdesencript= txtdesencript + arraytxt; console.log(txtdesencript);
        }
    }

    document.getElementById("txtdesencripta").value= txtdesencript;
}

function copiar(){
    let txtencrptado= document.getElementById("txtdesencripta");
    txtencrptado.select();
    document.execCommand("copy");
}