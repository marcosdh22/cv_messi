/** 
document.getElementById("but").onclick = function() {apretar()};


function apretar(){
    console.log("Si, apreto");
    document.getElementById("par").innerHTML="A ver si cambia";
}


document.getElementById("bot").addEventListener("click", apretar());


document.getElementById("bot").onclick=function(){
    console.log("Si, apreto");
    document.getElementById("par").innerHTML="A ver si cambia";
};


document.getElementById("but").onclick = function() {myFunction()};

function myFunction() {
  console.log("Si, apreto");
  document.getElementById("par").innerHTML = "A ver si cambia";
}

*/
document.getElementById('bot').addEventListener('click', function() {
    document.body.style.backgroundColor="blue";
});
