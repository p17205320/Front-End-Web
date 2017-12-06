    function photo() {
      if (document.getElementById("photoThumb") !== null) {
        //Removes the event listener as it is no longer required
        document.removeEventListener("DOMNodeInserted", photo);
        console.log(document.getElementById("photoThumb"));
        // does this need to be here?
        document.getElementById("photoThumb").removeEventListener("click", function(e){});
        //Loads function when image is clicked
        document.getElementById("photoThumb").addEventListener("click", function(e) {
          console.log(e.target.dataset);
          //Ensures that the script doesn't try to load an image if the user clicks the spacing between images
          if (e.target.dataset.photo !== undefined) {
            //injects the code for the image and a link to the full image
              document.getElementById("photoFull").innerHTML = "<img data-src='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'><p id = 'loadingIndicate'>Loading<img src = 'css/loading.svg'></p> ";
              document.getElementById("photoFull").innerHTML += "<a href='https://portfolio.joshua-s.website/Media/Level_3_Interactive_Media/Image/photography/Full/"+ e.target.dataset.photo + ".JPG'> Full Image </a>";
          }
          //Scroll to the top of the page
          window.scrollTo(0, 0);
          lazyLoad();
        })
      }

    }
