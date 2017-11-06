(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);

mainMenu.addEventListener("click",  function(e)
{
  subMenu.innerHTML = "";
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<table> <tr> <td href = '#'> <a href = '#'> Level 2 Interactive Media</a></td>" +
        "<td href = '#'><a href = '#'> Level 3 Interactive Media</a></td>" +
        "<td href = '#'><a href = '#'> Level 3 IT</a></td>" +
        "<td href = '#'><a href = '#'> HND Computing</a></td></tr></table>"

  } else {

  }
  subMenu.animate({ transform: [ 'scaleY(0)', 'scaleY(1)' ] },
      { duration: 100, iterations: 1 });
  subMenu.style.display = "Block";

});

}());