(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);

mainMenu.addEventListener("click",  function(e)
{
  subMenu.innerHTML = "";
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<table> <tr> <td href = '#'> Level 2 Interactive Media</td>" +
        "<td href = '#'> Level 3 Interactive Media</td>" +
        "<td href = '#'> Level 3 IT</td>" +
        "<td href = '#'> HND Computing</td></tr></table>"

  } else {

  }
  subMenu.animate({ transform: [ 'scaleY(0)', 'scaleY(1)' ] },
      { duration: 100, iterations: 1 });
  subMenu.style.display = "Block";

});

}());