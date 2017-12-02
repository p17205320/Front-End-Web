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
      pageLoadContent.innerHTML = "<section>\n" +
        "  <h1>About Me</h1>\n" +
        "  <figure>\n" +
        "    <img src=\"https://portfolio.joshua-s.website/Media/About_Me/me_hnd_grad.jpg\">\n" +
        "    <figcaption>Me at my graduation for HND Computing and Systems Development. 2nd from the right at top</figcaption>\n" +
        "  </figure>\n" +
        "  <p> My name is Joshua. I am a third year student at <a href = \"http://www.dmu.ac.uk/\">De Montfort University</a> studying <a href = \"http://www.dmu.ac.uk/study/courses/undergraduate-courses/computing-bsc/computing-bsc-degree.aspx\">BSC Computing</a>.\n" +
        "    I was previously studing at <a href = \"http://www.stamford.ac.uk/\">New College Stamford</a> where i studied Interactive Media and Computing</p>\n" +
        "</section>";
      ;
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
      loadContent("Pages/none.txt");
      pageTransition();

    } else if (e.target.dataset.button === "robotsTrip") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Robot's Trip</h1>\n" +
        "  <video controls>\n" +
        "    <source src=\"https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Video/Robots_Trip.webm\">\n" +
        "  </video>\n" +
        "   <ul>\n" +
        "     <li>First experience with cutout animation</li>\n" +
        "   </ul>\n" +
        "</article>";

      pageTransition();

    } else if (e.target.dataset.button === "battleship") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Battleship</h1>\n" +
        "  <video controls>\n" +
        "    <source src=\"https://portfolio.joshua-s.website/Media/Level_3_IT/Video/Battleship_Gameplay.webm\">\n" +
        "  </video>\n" +
        "  <ul>\n" +
        "    <li>First experience with Windows Forms</li>\n" +
        "    <li>First experience with creating a program with a GUI</li>\n" +
        "    <li>Created in Visual Basic</li>\n" +
        "    <li>Uses <a href = \"http://espeak.sourceforge.net/\">espeak</a> for voice synthesis</li>\n" +
        "    <figure>\n" +
        "      <img src=\"https://portfolio.joshua-s.website/Media/Level_3_IT/Image/battleship/1.png\">\n" +
        "      <figcaption>Options screen. One of the main goals was for the program to be customisable</figcaption>\n" +
        "    </figure>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();

    } else if (e.target.dataset.button === "monsta") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Monsta</h1>\n" +
        "  <figure>\n" +
        "    <video controls>\n" +
        "      <source src=\"https://portfolio.joshua-s.website/Media/Level_3_IT/Video/Monsta_Gameplay.webm\">\n" +
        "    </video>\n" +
        "    <figcaption>I got really unlucky with this run.</figcaption>\n" +
        "  </figure>\n" +
        "  <ul>\n" +
        "    <li>First experience with Visual Basic</li>\n" +
        "    <li>First experience with Programming.</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "ncsVideo") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>New College Stamford - Promo</h1>\n" +
        "    <video controls>\n" +
        "      <source src=\"https://portfolio.joshua-s.website/Media/Level_3_IT/Video/NCS_promo.webm\">\n" +
        "    </video>\n" +
        "  <ul>\n" +
        "    <li>Created to showcase the various departments of New College Stamford</li>\n" +
        "    <li>First time using masking for scene transitions</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "stoningCyprus") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Stoning Cyprus Website</h1>\n" +
        "<figure>\n" +
        "<img src = \"https://portfolio.joshua-s.website/Media/Level_3_IT/Image/stoning_cyprus/1.png\">\n" +
        "  <figcaption><a href = \"https://stoning-cyprus.joshua-s.website\">Live Version</a></figcaption>\n" +
        "</figure>\n" +
        "  <ul>\n" +
        "    <li>Created to promote a fictitious album</li>\n" +
        "    <li>First experience with HTML5, CSS3, Javascript and Responsive Design</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "cicVideo") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>CiC Video Site</h1>\n" +
        "  <figure>\n" +
        "    <img src = \"https://portfolio.joshua-s.website/Media/HND_Computing/Image/cic_video/1.png\" alt = \"Screenshot of CIC Video Site\">\n" +
        "    <figcaption><a href = \"https://cic-video.joshua-s.website\">Live Version</a></figcaption>\n" +
        "  </figure>\n" +
        "  <ul>\n" +
        "    <li>IMDB like site</li>\n" +
        "    <li>First experience with PHP & MySQL</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "stamfordVideo") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>History of Stamford</h1>\n" +
        "  <video controls>\n" +
        "    <source src=\"https://portfolio.joshua-s.website/Media/HND_Computing/Video/Stamford_History.webm\">\n" +
        "  </video>\n" +
        "  <ul>\n" +
        "    <li>Created to showcase the history of Stamford</li>\n" +
        "    <li>Filmed on a phone and stabilized in post (We were supposed to get a proper camera but whatever)</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "snek") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Snek</h1>\n" +
        "  <video controls>\n" +
        "    <source src=\"https://portfolio.joshua-s.website/Media/HND_Computing/Video/Snek_Gameplay.webm\">\n" +
        "  </video>\n" +
        "  <ul>\n" +
        "    <li>Created using C#</li>\n" +
        "    <lI>First Experience with C# games dev</lI>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "xonarSystems") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>Xonar Systems Site</h1>\n" +
        "  <figure>\n" +
        "    <img src = \"https://portfolio.joshua-s.website/Media/HND_Computing/Image/xonar_systems/1.png\" alt = \"Screenshot of Xonar Systems Site\">\n" +
        "    <figcaption><a href = \"https://xonar-systems.joshua-s.website\">Live Version</a></figcaption>\n" +
        "  </figure>\n" +
        "  <ul>\n" +
        "    <li>PC Configuator/Ordering Site</li>\n" +
        "    <li>Created using PHP</li>\n" +
        "    <li>Took 4 days to create</li>\n" +
        "  </ul>\n" +
        "</article>";

      pageTransition();
    } else if (e.target.dataset.button === "grantham") {
      hideAll();
      subMenuHide();
      pageLoadContent.innerHTML = "<article>\n" +
        "  <h1>A documentary we did about the shops in grantham</h1>\n" +
        "  <video controls>\n" +
        "    <source src=\"https://portfolio.joshua-s.website/Media/Other/Video/grantham_doc.webm\">\n" +
        "  </video>\n" +
        "  <ul>\n" +
        "    <li>Extended/Directors cut made years after the original</li>\n" +
        "    <li>Bad title because i forgot the original one</li>\n" +
        "    <li>Original version made in 2009</li>\n" +
        "    <li>Created for a documentary contest. Group that created the best documentary won something and was supposed to be featured in an article in the guardian or something</li>\n" +
        "    <li>Audio is terrible because the backup director forgot to plug in the mic (I was ill on the timing of shooting)</li>\n" +
        "    <li>Original edit by the backup director was soo bad i had to edit a new version on the day of submission</li>\n" +
        "    <li>Original edit won the competition against the other 3 entries!</li>\n" +
        "    <li><small>But only because it was the only entry the meet the entry criteria!</small></li>\n" +
        "    <li>That article never happened surprisingly</li>\n" +
        "    <li>I was somehow accepted onto Level 3 Interactive Media with just this in my portfolio</li>\n" +
        "  </ul>\n" +
        "</article>";

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