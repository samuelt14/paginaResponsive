/**
 * para accionar el boton de busqueda
 */ 
let buscar = document.querySelector('.buscar-box');  

document.querySelector('#buscar-icono').onclick = () => {
    buscar.classList.toggle('active');
};
