const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){
    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        themeBtn.innerHTML =
        document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    });
}