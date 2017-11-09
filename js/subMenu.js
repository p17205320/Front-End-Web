(function(){
  let mainMenu = document.getElementById("mainMenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("subMenu");
  console.log(subMenu);
  let mainContent = document.getElementById("mainContent");
mainMenu.addEventListener("click",  function(e)
{
  if (e.target.dataset.menuitem === "prevWork") {
    subMenu.innerHTML = "<table> <tr> " +
        "<td href = '#' data-menuItem = 'level3Media'> Level 3 Interactive Media</td>" +
        "<td href = '#' data-menuItem = 'level3IT'> Level 3 IT</td>" +
        "<td href = '#' data-menuItem = 'HNDIT'> HND Computing</td></tr></table>"
    subMenu.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    subMenu.style.display = "Block";
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
  } else if (e.target.dataset.menuitem === "level3Media") {
    mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "<div id =\"mainButtonContain\">\n" +
          "  <h1>Interactive Media Level 3</h1>\n" +
          "  <h2>Works</h2>\n" +
          "  <table>\n" +
          "    <tr href=\"#\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_Interactive_Media/Button/None.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>None</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_Interactive_Media/Button/Robot's%20Trip.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Robot's Trip</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "  </table>\n" +
          "</div>";
    mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
  } else {

  }



});


}());