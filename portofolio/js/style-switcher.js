/*======================================toggle style switcher======================== */
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>
{

document.querySelector(".style-switcher").classList.toggle("open");

})
// hide style switcher on scroll 
// لو الكلاس يست متضاف له   او بداخله ال الكلاس أوبن اذا ابطل عمله ب انك نجذفه
window.addEventListener("scroll",()=>
{
if(    document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");

}
})
/*======================================theme colors======================== */
// the links of the colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyle.forEach((style) => 
        {
            if(color === style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else
            {
                style.setAttribute("disabled","true");
            }
        })
}
/*======================================theme light and dark mode======================== */
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click", () =>
{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load",() =>
{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})