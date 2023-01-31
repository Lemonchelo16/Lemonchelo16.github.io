
let info_btn = document.getElementById('info_btn');

let infoP = document.getElementsByClassName('infoP');

info_btn.addEventListener('click', mostrarTexto);

function mostrarTexto() {
 infoP[0].classList.toggle('mostrarTexto');
 infoP[1].classList.toggle('mostrarTexto');
 infoP[2].classList.toggle('mostrarTexto');
 infoP[3].classList.toggle('mostrarTexto')
}