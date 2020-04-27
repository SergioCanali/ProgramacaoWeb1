

function soma3(){


    debugger;
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var n3 = parseInt(document.getElementById("numero3").value);

    var x = n1 + n2 + n3;

    

    if (x % 2==0){
        x.toString = x + " é par" 
    }else{
        x.toString = x + " é impar"
    }

    window.alert(x);
}

