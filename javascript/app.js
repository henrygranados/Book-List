var $ = function (id) {
    return document.getElementById(id);
}
window.onload = function () {
    // set up the list display
    var categories = $("categories");
    var h2Elements = categories.getElementsByTagName("h2");

    var h2Node;
    for (var i = 0; i < h2Elements.length; i++ ) {
     h2Node = h2Elements[i];

        // Attach event handler
        h2Node.onclick = function () {

            var h2 = this;         // h2 is the current headingNode object

            if (h2.getAttribute("class") == "plus") {
                h2.setAttribute("class", "minus");  
            }
            else {
                h2.setAttribute("class", "plus");
            }
            if (h2.nextElementSibling.getAttribute("class") == "closed") {
                h2.nextElementSibling.setAttribute("class", "open");
            }
            else {
                h2.nextElementSibling.setAttribute("class", "closed");
                var linkElements = h2.nextElementSibling.firstChild.childNodes;
            }
            $("image").setAttribute("src", "");
            // needed for IE so a placeholder isn't displayed for the image
            $("image").setAttribute("style", "display:none;");
        }
    }

    // set up the image display
    var listNode = $("categories");
    var imageNode = $("image");
    var texto = $("texto");

    var imageLinks = listNode.getElementsByTagName("a");
    var array = ["Book1", "Book2", "Book3", "Book4", "Book5", "Book6", "Book7", "Book8", "Book9", "Book10", "Book11", "Book12"];

    // Process image links
    var i, linkNode, image;
    for ( i = 0,j=0; i < imageLinks.length; i++,j++ ) {
      linkNode = imageLinks[i];
      if(j>=array.length) j=0; //Back to begin if array text not enough for link elements
      linkNodeArray = array[j];
      linkNode.setAttribute('title',linkNodeArray);
    // Attach event handler
    linkNode.onclick = function (evt) {
        var link = this;          // link is the linkNode

        imageNode.src = link.getAttribute("href");
        texto.innerHTML = link.getAttribute('title');

        // needed for IE to display the image
        imageNode.setAttribute("style", "display:block;");

        // Cancel the default action of the event
        if (!evt) { evt = window.event; }
        if ( evt.preventDefault ) {
            evt.preventDefault();          // DOM compliant code
        }
        else {
            evt.returnValue = false;
        }
    }
    // Preload image
    image = new Image();
    image.src = linkNode.getAttribute("href");

}
}