console.log("Cześć!");

let ukryj = document.querySelector(".przycisk1");
let obraz = document.querySelector(".obraz");


ukryj.addEventListener("click", () => {
    obraz.remove();
});


