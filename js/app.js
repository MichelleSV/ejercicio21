window.addEventListener("load", function() {
   var button = document.getElementById("calcular");
   button.addEventListener("click", function() {
       var cantSegundos = parseInt(document.getElementById("cantSegundos").value);
        setInterval(color,cantSegundos*1000);
        function color(){
        document.body.style.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16);
		}
    });
});