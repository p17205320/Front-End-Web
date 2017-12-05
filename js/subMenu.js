(function(){
  let mainMenu = document.getElementById("mainMenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("subMenu");
  console.log(subMenu);
  let mainContent = document.getElementById("mainContent");
  console.log(mainContent);

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
      loadContent("Pages/buttons/level3media.txt");
      pageTransition();

    }else if (e.target.dataset.menuitem === "level3IT") {
      

      hideAll();
      loadContent("Pages/buttons/level3it.txt");
      pageTransition();

    }else if (e.target.dataset.menuitem === "HNDIT") {
      

      hideAll();
      loadContent("Pages/buttons/hndcomputing.txt");
      pageTransition();

    }else if (e.target.dataset.menuitem === "other") {
      

      hideAll();
      loadContent("Pages/buttons/other.txt");
      pageTransition();

    } else if (e.target.dataset.menuitem === "homePage") {
      

      hideAll();
      loadContent("Pages/other/homepage.txt");

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
      loadContent("Pages/hndcomputing/stamfordhistory.txt");
      pageTransition();
    } else if (e.target.dataset.button === "snek") {
      hideAll();
      subMenuHide();
      loadContent("Pages/hndcomputing/snek.txt");
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
    } else if (e.target.dataset.button === "photography") {
      hideAll();
      subMenuHide();
      loadContent("Pages/level3media.txt/photography.txt");
      pageTransition();
      document.addEventListener("DOMNodeInserted", photo);

    }

    document.addEventListener("DOMNodeInserted", lazyLoad);




  });

  function loadContent(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        mainContent.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", e, true);
    xhttp.send();
  }
  function subMenuHide() {
    subMenu.innerHTML="";
  }
  function hideAll() {
    mainContent.style.display = "None";
    mainContent.innerHTML = "";
  }
  
  function pageTransition() {
    mainContent.style.display = "Block";
    mainContent.classList.add("transition");
  }
  function pageLoad (e) {
    pageTransition();


  }



}());