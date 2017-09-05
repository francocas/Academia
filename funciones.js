function sumar()
{
   var a = document.getElementById("numA").value;
   var b = document.getElementById("numB").value;
   a = parseInt(a);
   b = parseInt(b);
   console.log(a+b);
}
function dividir()
{
   var a = document.getElementById("numA").value;
   var b = document.getElementById("numB").value;
   a = parseInt(a);
   b = parseInt(b);
   console.log(a/b);
}
function multiplicar()
{
   var a = document.getElementById("numA").value;
   var b = document.getElementById("numB").value;
   a = parseInt(a);
   b = parseInt(b);
   console.log(a*b);
}
function restar()
{
   var a = document.getElementById("numA").value;
   var b = document.getElementById("numB").value;
   a = parseInt(a);
   b = parseInt(b);
   console.log(a-b);
}


function agregarCaracter(b)
{
    var a = document.getElementById("calculo").innerHTML += b;
}

function clear() {
    alert("AltoGato")
    var a = document.getElementById("calculo").innerHTML = "aa";
}