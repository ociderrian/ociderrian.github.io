$(document).ready(function() {
  // Find the element with ID "myDiv"
  var myDiv = $('#myDiv');

  // On hover over the element, change the src attribute of the image inside the element to "image.gif"
  myDiv.hover(
    function() {
      $(this).find('img').attr('src', 'image.gif');
    },
    // On hover out of the element, change the src attribute of the image inside the element back to "image.png"
    function() {
      $(this).find('img').attr('src', 'image.png');
    }
  );
});
