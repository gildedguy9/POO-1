console.log("page loaded...");

function playVideo(secundaryVideo, textId) {
    var mainVideo = document.egtElemntById(textoId);
    var temp = mainVideo.src;
    var textoSecundario = document.getElementById(textoId);
    var textoPrincipal = document.getElementById("texto");

    var tempTexto = textosecundario.innerText;
    textoSecundario.innerText = textoPRincipal.innerText;
    textoPrincipal.innerText = tempTexto;

    mainVideo.src = secundaryVideo.src;
    mainVideoplay();
    secundaryVideo.src = temp;

}
function pauseVideo(){

    mainVideo.pause();
}