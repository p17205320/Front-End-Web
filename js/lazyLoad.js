function lazyLoad() {

    [].forEach.call(document.querySelectorAll("img[data-src]"),    function(img) {
      img.setAttribute("src", img.getAttribute("data-src"));

      img.onload = function() {

        img.removeAttribute("data-src");
        console.log(img.nextSibling);
        if (img.nextSibling.nodeName = "P") {
          img.nextSibling.remove();
        }

      };
    });

  document.removeEventListener("DOMNodeInserted", lazyLoad);
}