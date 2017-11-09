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
    subMenu.innerHTML = "<table> <tr> " +
        "<td href = '#'> Level 3 Interactive Media</td>" +
        "<td href = '#'> Level 3 IT</td>" +
        "<td href = '#'> HND Computing</td></tr></table>"

  } else if (e.target.dataset.menuitem === "aboutMe") {
    mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
        mainContent.innerHTML = "<section>\n" +
            "  <h1>About Me</h1>\n" +
            "  <figure>\n" +
            "    <img src=\"Media/About_Me/me_hnd_grad.jpg\">\n" +
            "    <figcaption>Me at my graduation for HND Computing and Systems Development. 2nd from the right at top</figcaption>\n" +
            "  </figure>\n" +
            "  <p> My name is Joshua. I am a third year student at <a href = \"http://www.dmu.ac.uk/\">De Montfort University</a> studying <a href = \"http://www.dmu.ac.uk/study/courses/undergraduate-courses/computing-bsc/computing-bsc-degree.aspx\">BSC Computing</a>.\n" +
            "    I was previously studing at <a href = \"http://www.stamford.ac.uk/\">New College Stamford</a> where i studied Interactive Media and Computing</p>\n" +
            "</section>";
    mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
  } else {

  }
  subMenu.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
  subMenu.style.display = "Block";

});


}());