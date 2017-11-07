(function(){
  let mainMenu = document.getElementById("mainmenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("submenu");
  console.log(subMenu);
  let mainContent = document.getElementById("maincontent");
mainMenu.addEventListener("click",  function(e)
{
  subMenu.innerHTML = "";
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<table> <tr> <td href = '#'> Level 2 Interactive Media</td>" +
        "<td href = '#'> Level 3 Interactive Media</td>" +
        "<td href = '#'> Level 3 IT</td>" +
        "<td href = '#'> HND Computing</td></tr></table>"

  } else if (e.target.dataset.menuitem === "aboutMe") {
    mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
        mainContent.innerHTML = "<p>Testing testing 123</p>"
    mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
  } else {

  }
  subMenu.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
  subMenu.style.display = "Block";

});


}());