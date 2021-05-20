let ubicacion = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento = window.pageYOffset;
    if (ubicacion >= Desplazamiento){
        this.document.getElementById("header").style.top = "0";   
    }
    else{
        document.getElementById("header").style.top = "-100px";
    }
    ubicacion = Desplazamiento;

    
}

window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto1");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    console.log (posicion1);
    

    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover 1s ease-out"}
})


window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto2");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    console.log (posicion1);
    

    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover2 1s ease-out"}
})


window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto3");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover3 1s ease-out"}
})







window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto4");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover 1s ease-out"}
})

window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto5");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover2 1s ease-out"}
})

window.addEventListener("scroll", function(){
    let animacion =document.getElementById("foto6");
    let posicion1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicion1 < tamañoPantalla){
    animacion.style.animation = "mover3 1s ease-out"}
})



