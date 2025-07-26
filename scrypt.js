document.getElementById("enviarBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    this.value = ""; // Borra el texto
    this.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/786/786205.png')";
    this.style.backgroundSize = "contain";
    this.style.backgroundRepeat = "no-repeat";
    this.style.backgroundPosition = "center";
});
