    const theme = document.getElementById('theme').value;
    const body = document.getElementById('body');

const temaPagina = () =>{
    const theme = document.getElementById('theme').value;
    const body = document.getElementById('body');


if (theme == 1){
    body.classList.add("theme-light");
    body.classList.remove("theme-dark")
    body.classList.remove("theme-free");
}else if(theme == 2){

    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
    body.classList.remove("theme-free");
}else if(theme == 3){
    body.classList.add("theme-free");
    body.classList.remove("theme-dark");
    body.classList.remove("theme-light");

}
}