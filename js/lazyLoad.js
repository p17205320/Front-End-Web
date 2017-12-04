function lazyLoad() {
    //Solution taken from https://davidwalsh.name/lazyload-image-fade but modified to show a loading indicator also
    //This functional loads all images with the data-src data attribute and sets the attribute to the src attribute and then removes the data attribute when the image is loaded. CSS is then used to fade in the image.
    [].forEach.call(document.querySelectorAll("img[data-src]"),    function(img) {
      img.setAttribute("src", img.getAttribute("data-src"));

      img.onload = function() {

        img.removeAttribute("data-src");
        // Put in to make the console stop moaning at me
        //This is what i added to the function. It removes the loading indicator once the image is loaded
        if (img.nextElementSibling.id = "loadingIndicate") {
            img.nextElementSibling.remove();

        }

      };
    });
// removes the event listener as it is no longer needed.
  document.removeEventListener("DOMNodeInserted", lazyLoad);
}