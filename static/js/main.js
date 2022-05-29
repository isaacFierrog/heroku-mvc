const d = document;
const $body = d.body;


const leerBotones = selecBoton => {
    d.addEventListener('click', e => {
        if(!e.target.matches(selecBoton)) return;

        const boton = e.target.classList[1];
        
        if(boton.includes('rojo')) $body.style.backgroundColor = '#e63946';
        if(boton.includes('verde')) $body.style.backgroundColor = '#606c38';
        if(boton.includes('azul')) $body.style.backgroundColor = '#006d77';
    });
}


d.addEventListener('DOMContentLoaded', e => {
    leerBotones('.botones__boton');
});