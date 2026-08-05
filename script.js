document.addEventListener("DOMContentLoaded", () => {

    const image = document.getElementById("contactImage");

    image.addEventListener("contextmenu", e => {
        e.preventDefault();
    });

    image.setAttribute("draggable","false");

    image.addEventListener("dragstart", e=>{
        e.preventDefault();
    });

    image.addEventListener("selectstart", e=>{
        e.preventDefault();
    });

});
