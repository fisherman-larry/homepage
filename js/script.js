{
    function welcome() {
        console.log("Welcome on my homepage!")
    }

    const imageRemove = () => {
        const image = document.querySelector(".js-image");
        image.remove();
    };

    const init = () => {
        const hide = document.querySelector(".js-button");

        hide.addEventListener("click", imageRemove);
        welcome();
    }
    init();
}