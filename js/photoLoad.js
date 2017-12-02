

(function(){

  document.addEventListener("DOMNodeInserted",photo);


    function photo() {

      if (document.getElementById("photoThumb") != null) {
        document.removeEventListener("DOMNodeInserted", photo);
        console.log(document.getElementById("photoThumb"));
        document.getElementById("photoThumb").addEventListener("click", function(e) {
          console.log(e);

        })
      };

    }
}());