const btn = document.querySelector(".change-mode");
const btnReverse = document.querySelector(".change-mode-reverse");

btn.addEventListener("click", ()=> {
    document.querySelector("body").classList.add("dark-mode");
    btn.style.display="none"
    btnReverse.style.display="block";
})

btnReverse.addEventListener("click",()=> {
    document.querySelector("body").classList.remove("dark-mode");
    btn.style.display="block"
    btnReverse.style.display="none";
})