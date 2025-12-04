const buttons = document.querySelectorAll(".repo-link, .projectBtn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", ()=>{
    btn.classList.add("growBtn");
    });

    btn.addEventListener("mouseleave", ()=>{
    btn.classList.remove("growBtn");
    });
});