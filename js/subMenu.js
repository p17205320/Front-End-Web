(function(){
  let mainMenu = document.getElementById("mainMenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("subMenu");
  console.log(subMenu);
  let mainContent = document.getElementById("mainContent");
  console.log(mainContent);
  let pageLoadContent = document.getElementById("pageLoad");
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
      eventKill();
      hideAll();
      pageLoadContent.innerHTML = "<section>\n" +
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
      eventKill();
      hideAll();
      document.getElementById("mainButtonContain1").style.display = "Block";
      document.getElementById("mainButtonContain1").addEventListener("click", pageLoad, e);
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "level3IT") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      eventKill();
      hideAll();
      document.getElementById("mainButtonContain2").style.display = "Block";
      document.getElementById("mainButtonContain2").addEventListener("click", pageLoad, e);
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "HNDIT") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      eventKill();
      hideAll();
      document.getElementById("mainButtonContain3").style.display = "Block";
      document.getElementById("mainButtonContain3").addEventListener("click", pageLoad, e);
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    }else if (e.target.dataset.menuitem === "other") {
      mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
      eventKill();
      hideAll();
      document.getElementById("mainButtonContain4").style.display = "Block";
      document.getElementById("mainButtonContain4").addEventListener("click", pageLoad, e);
      mainContent.animate([ { opacity: 0 }, { opacity: 1 } ], 500);
    } else {
    }






    });

    function eventKill() {
      document.getElementById("mainButtonContain1").removeEventListener("click", pageLoad);
      document.getElementById("mainButtonContain2").removeEventListener("click", pageLoad);
      document.getElementById("mainButtonContain3").removeEventListener("click", pageLoad);
      document.getElementById("mainButtonContain4").removeEventListener("click", pageLoad);
    };

    function hideAll() {
      document.getElementById("mainButtonContain2").style.display = "None";
      document.getElementById("mainButtonContain3").style.display = "None";
      document.getElementById("mainButtonContain1").style.display = "None";
      document.getElementById("mainButtonContain4").style.display = "None";
      pageLoadContent.innerHTML = "";
    }
    function pageLoad (e) {

      if (e.target.dataset.button === "none") {
        mainContent.animate([ { opacity: 1 }, { opacity: 0 } ], 500);
        hideAll();
        pageLoadContent.innerHTML = "<video>\n" +
            "  <source src=\"Media/Level_3_Interactive_Media/Video/None.webm\">\n" +
            "</video>";
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
    };



}());