var button_C = document.getElementById('bC'); 
var buttonM_O = document.getElementById('buttonNavResp');
var naviR = document.getElementById('nP');
button_C.addEventListener('click',cerrarMR)
buttonM_O.addEventListener('click',openMR)
function cerrarMR(){
    naviR.classList.add('closeMenuResp')
    console.log(naviR)
}
function openMR(){
    naviR.classList.add('openMenuResp')
    naviR.classList.remove('closeMenuResp')
    console.log(naviR)
}


