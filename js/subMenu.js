(function(){
  //These are the 3 elements that this function will manipulate
  let mainMenu = document.getElementById("mainMenu");
  console.log(mainMenu);
  let subMenu = document.getElementById("subMenu");
  console.log(subMenu);
  let mainContent = document.getElementById("mainContent");
  console.log(mainContent);
// When any area of the page is click this function fires. This solves the previous issue of dom mutation as the event listener isn't set to an element that is yet to be loaded
  document.addEventListener("click",  function(e)
  {
    //Displays the submenu. This isn't loaded externally because there is little point
    if (e.target.dataset.menuitem === "prevWork") {
      subMenu.style.display = "Flex";
      subMenu.innerHTML = "  <button  data-menuItem = 'level3Media'> Level 3 Interactive Media</button>\n" +
        "  <button  data-menuItem = 'level3IT'> Level 3 IT</button>\n" +
        "  <button  data-menuItem = 'HNDIT'> HND Computing</button>\n" +
        "  <button  data-menuItem = 'other'> Other</button>";
      subMenu.classList.add("transition");
      //The dataset is used to determine what button the user has pressed
    } else if (e.target.dataset.menuitem === "aboutMe") {
      //Runs the loadContent function with the location of the required page
      loadContent("Pages/other/aboutme.txt");
    } else if (e.target.dataset.menuitem === "level3Media") {
      
      loadContent("Pages/buttons/level3media.txt");
    }else if (e.target.dataset.menuitem === "level3IT") {
      
      loadContent("Pages/buttons/level3it.txt");
    }else if (e.target.dataset.menuitem === "HNDIT") {
      
      loadContent("Pages/buttons/hndcomputing.txt");
    }else if (e.target.dataset.menuitem === "other") {
      
      loadContent("Pages/buttons/other.txt");
    } else if (e.target.dataset.menuitem === "homePage") {
      
      loadContent("Pages/other/homepage.txt");
    }
    if (e.target.dataset.button === "none") {
      //Hides the submenu
      subMenuHide();
      loadContent("Pages/level3media/none.txt");
    } else if (e.target.dataset.button === "robotsTrip") {
      subMenuHide();
      loadContent("Pages/level3media/robotstrip.txt");
    } else if (e.target.dataset.button === "battleship") {
      
      subMenuHide();
      loadContent("Pages/level3it/battleship.txt");
      
    } else if (e.target.dataset.button === "monsta") {
      
      subMenuHide();
      loadContent("Pages/level3it/monsta.txt");
      
    } else if (e.target.dataset.button === "ncsVideo") {
      
      subMenuHide();
      loadContent("Pages/level3it/ncsvideo.txt");
      
    } else if (e.target.dataset.button === "stoningCyprus") {
      
      subMenuHide();
      loadContent("Pages/level3it/stoningcyprus.txt");
      
    } else if (e.target.dataset.button === "cicVideo") {
      
      subMenuHide();
      loadContent("Pages/hndcomputing/cicvideo.txt");
      
    } else if (e.target.dataset.button === "stamfordVideo") {
      
      subMenuHide();
      loadContent("Pages/hndcomputing/stamfordhistory.txt");
      
    } else if (e.target.dataset.button === "snek") {
      
      subMenuHide();
      loadContent("Pages/hndcomputing/snek.txt");
      
    } else if (e.target.dataset.button === "xonarSystems") {
      
      subMenuHide();
      loadContent("Pages/hndcomputing/xonarsystems.txt");
      
    } else if (e.target.dataset.button === "grantham") {
      
      subMenuHide();
      loadContent("Pages/other/grantham.txt");
      
    } else if (e.target.dataset.button === "photography") {
      
      subMenuHide();
      loadContent("Pages/level3media/photography.txt");
      //Runs the photo function once the code for the page has loaded properly. If you just call the function now it will fail because the code will not of loaded into the DOM in time
      document.addEventListener("DOMNodeInserted", photo);

    }
    //This event listener is used to run lazyload on images
    document.addEventListener("DOMNodeInserted", lazyLoad);




  });

  function loadContent(e) {
    let xhttp = new XMLHttpRequest();
    //Requests the text file and then inserts it into the main tag of the page
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        //Hides the main page, inserts the code and then fades the page in
        hideAll();
        mainContent.innerHTML = this.responseText;
        pageTransition();
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
    mainContent.classList.remove("transition");

  }
  
  function pageTransition() {
    mainContent.style.display = "Block";
    //Adding this transition class runs an animation that goes from opacity 0 to opacity 1
    mainContent.classList.add("transition");
  }



}());