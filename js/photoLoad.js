





    function photo() {

      if (document.getElementById("photoThumb") != null) {
        document.removeEventListener("DOMNodeInserted", photo);
        console.log(document.getElementById("photoThumb"));
        document.getElementById("photoThumb").removeEventListener("click", function(e){});
        document.getElementById("photoThumb").addEventListener("click", function(e) {
          console.log(e.target.dataset);

          document.getElementById("photoFull").innerHTML = "<img data-src='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'><p id = 'loadingIndicate'>Loading<img src = 'css/loading.gif'></p> ";
          document.getElementById("photoFull").innerHTML += "<a href='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'> Full Image </a>";

          window.scrollTo(0, 0);
          lazyLoad();

        })
      };

    }
