(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);

mainMenu.addEventListener("click",  function(e)
{
  subMenu.innerHTML = "";
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<a href = '#'> Level 2 Interactive Media</a>" +
        "<a href = '#'> Level 3 Interactive Media</a>" +
        "<a href = '#'> Level 3 IT</a>" +
        "<a href = '#'> HND Computing</a>"

  } else {

  }
  subMenu.animate({ transform: [ 'scaleY(0)', 'scaleY(1)' ] },
      { duration: 100, iterations: 1 });
  subMenu.style.display = "Block";

});

}());