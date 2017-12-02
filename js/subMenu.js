(function(){
  let mainMenu = document.getElementById("mainMenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("subMenu");
  console.log(subMenu);
  let mainContent = document.getElementById("mainContent");
  console.log(mainContent);
  let pageLoadContent = document.getElementById("pageLoad");
  document.addEventListener("click",  function(e)
  {
    if (e.target.dataset.menuitem === "prevWork") {
      subMenu.style.display = "Flex";
      subMenu.innerHTML = "  <button  data-menuItem = 'level3Media'> Level 3 Interactive Media</button>\n" +
        "  <button  data-menuItem = 'level3IT'> Level 3 IT</button>\n" +
        "  <button  data-menuItem = 'HNDIT'> HND Computing</button>\n" +
        "  <button  data-menuItem = 'other'> Other</button>";
      subMenu.classList.add("transition");
    } else if (e.target.dataset.menuitem === "aboutMe") {
      hideAll();
      loadContent("Pages/other/aboutme.txt");
      pageTransition();
    } else if (e.target.dataset.menuitem === "level3Media") {
      

      hideAll();
      document.getElementById("mainButtonContain1").style.display = "Flex";
      document.getElementById("mainButtonContain1").classList.add("transition");

    }else if (e.target.dataset.menuitem === "level3IT") {
      

      hideAll();
      document.getElementById("mainButtonContain2").style.display = "Flex";
      document.getElementById("mainButtonContain2").classList.add("transition");

    }else if (e.target.dataset.menuitem === "HNDIT") {
      

      hideAll();
      document.getElementById("mainButtonContain3").style.display = "Flex";
      document.getElementById("mainButtonContain3").classList.add("transition");

    }else if (e.target.dataset.menuitem === "other") {
      

      hideAll();
      document.getElementById("mainButtonContain4").style.display = "Flex";
      document.getElementById("mainButtonContain4").classList.add("transition");

    } else if (e.target.dataset.menuitem === "homePage") {
      

      hideAll();
      pageLoadContent.innerHTML = "<p>Hello and welcome to my portfolio page. Please use the buttons above to navigate the site and see all the previous projects i've done for courses i have been able to find since 2009</p>\n" +
        "  <p>This collection isn't complete but the missing stuff is really awful so you are not missing out on much (Be glad you don't see the first website i ever made. Using Dreamweaver <sub>shudders</sub>)</p>";

      pageTransition();

      
    }
    if (e.target.dataset.button === "none") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3media/none.txt");
      pageTransition();
    } else if (e.target.dataset.button === "robotsTrip") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3media/robotstrip.txt");
      pageTransition();
    } else if (e.target.dataset.button === "battleship") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3it/battleship.txt");
      pageTransition();
    } else if (e.target.dataset.button === "monsta") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3it/monsta.txt");
      pageTransition();
    } else if (e.target.dataset.button === "ncsVideo") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3it/ncsvideo.txt");
      pageTransition();
    } else if (e.target.dataset.button === "stoningCyprus") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3it/stoningcyprus.txt");
      pageTransition();
    } else if (e.target.dataset.button === "cicVideo") {
      hideAll();
      subMenuHide();
      loadContent("Pages/hndcomputing/cicvideo.txt");
      pageTransition();
    } else if (e.target.dataset.button === "stamfordVideo") {
      hideAll();
      subMenuHide();
      loadContent("Pages/hndcomputing/snek.txt");
      pageTransition();
    } else if (e.target.dataset.button === "snek") {
      hideAll();
      subMenuHide();
      loadContent("Pages/hndcomputing/stamfordhistory.txt");
      pageTransition();
    } else if (e.target.dataset.button === "xonarSystems") {
      hideAll();
      subMenuHide();
      loadContent("Pages/hndcomputing/xonarsystems.txt");
      pageTransition();
    } else if (e.target.dataset.button === "grantham") {
      hideAll();
      subMenuHide();
      loadContent("Pages/other/grantham.txt");
      pageTransition();
    }






  });

  function loadContent(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pageLoadContent.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", e, true);
    xhttp.send();
  }
  function subMenuHide() {
    subMenu.innerHTML="";
  }
  function hideAll() {
    document.getElementById("mainButtonContain2").style.display = "None";
    document.getElementById("mainButtonContain3").style.display = "None";
    document.getElementById("mainButtonContain1").style.display = "None";
    document.getElementById("mainButtonContain4").style.display = "None";
    pageLoadContent.style.display = "None";
    pageLoadContent.innerHTML = "";
  }
  
  function pageTransition() {
    pageLoadContent.style.display = "Block";
    pageLoadContent.classList.add("transition");
  }
  function pageLoad (e) {
    pageTransition();


  }



}());