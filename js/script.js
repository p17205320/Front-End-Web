(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);
function subMenuAnimate() {
  subMenu.style.display = "Block";
}
mainMenu.addEventListener("click", subMenuAnimate);


}());