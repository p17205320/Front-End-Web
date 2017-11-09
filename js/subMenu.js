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
          "<td href = '#' data-menuItem = 'HNDIT'> HND Computing</td>"  +
          "<td href = '#' data-menuItem = 'other'> Other</td></tr></table>"

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
          "    <tr href=\"#\" data-button = \"none\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_Interactive_Media/Button/None.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>None</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"robotsTrip\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_Interactive_Media/Button/Robot's%20Trip.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Robot's Trip</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "  </table>\n" +
          "</div>";
      let mainButton = document.getElementsByClassName("mainButton");
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "level3IT") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "<div id =\"mainButtonContain\">\n" +
          "  <h1>Level 3 IT</h1>\n" +
          "  <h2>Works</h2>\n" +
          "  <table>\n" +
          "    <tr href=\"#\" data-button = \"battleship\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_IT/Button/Battleship.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Battleship</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"monsta\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_IT/Button/Monsta.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Monsta</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"ncsVideo\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_IT/Button/NCS_Promo.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>New College Stamford Promo</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"stoningCyprus\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Level_3_IT/Button/Stoning_Cyprus.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Stoning Cyprus</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "  </table>\n" +
          "</div>";
      let mainButton = document.getElementsByClassName("mainButton");
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "HNDIT") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "<div id =\"mainButtonContain\">\n" +
          "  <h1>HND Computing</h1>\n" +
          "  <h2>Works</h2>\n" +
          "  <table>\n" +
          "    <tr href=\"#\" data-button = \"cicVideo\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/HND_Computing/Button/CIC_Video.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>CIC Video</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"stamfordVideo\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/HND_Computing/Button/Stamford_History.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>History of Stamford</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"snek\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/HND_Computing/Button/Snek.png\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Snek</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "    <tr href=\"#\" data-button = \"xonarSystems\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/HND_Computing/Button/Xonar_Systems.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>Xonar Systems</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "  </table>\n" +
          "</div>";
      let mainButton = document.getElementsByClassName("mainButton");
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "other") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "<div id =\"mainButtonContain\">\n" +
          "  <h1>Other</h1>\n" +
          "  <h2>Works</h2>\n" +
          "  <table>\n" +
          "    <tr href=\"#\" data-button = \"grantham\" class = \"mainButton\">\n" +
          "      <td>\n" +
          "        <img src=\"Media/Other/Button/Grantham.jpg\">\n" +
          "      </td>\n" +
          "      <td>\n" +
          "        <h1>A documentary we did about shops in grantham</h1>\n" +
          "      </td>\n" +
          "    </tr>\n" +
          "  </table>\n" +
          "</div>";
      let mainButton = document.getElementsByClassName("mainButton");
      console.log(mainButton);
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else {
    }





    });
  mainButton.addEventListener("click",  function(e) {
    if (e.target.dataset.button === "none") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "robotsTrip") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "battleship") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "monsta") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "ncsVideo") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "stoningCyprus") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "cicVideo") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "stamfordVideo") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "snek") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "xonarSystems") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else if (e.target.dataset.button === "grantham") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      mainContent.innerHTML = "";
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }
    else {

    }

  });
}());