// Even though is function is directly called the DOM is not ready bu the time it is a called. This is why a mutation event is used to ensure that the dom is ready or else the function wouldn't run
    function photo() {

      if (document.getElementById("photoThumb") != null) {
        document.removeEventListener("DOMNodeInserted", photo);
        console.log(document.getElementById("photoThumb"));
        document.getElementById("photoThumb").removeEventListener("click", function(e){});
        document.getElementById("photoThumb").addEventListener("click", function(e) {
          console.log(e.target.dataset);
          if (e.target.dataset.photo !== undefined) {
              document.getElementById("photoFull").innerHTML = "<img data-src='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'><p id = 'loadingIndicate'>Loading<img src = 'css/loading.svg'></p> ";
              document.getElementById("photoFull").innerHTML += "<a href='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'> Full Image </a>";
          }


          window.scrollTo(0, 0);
          lazyLoad();

        })
      };

    }
