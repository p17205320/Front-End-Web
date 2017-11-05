(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);
function subMenuAnimate() {
  let test = this.getAttribute("menuItem");

}
mainMenu.addEventListener("click",  function(e)
{
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<a href = '#'> Previous Work</a>"
  }
  subMenu.style.display = "Block";
});

}());