/* ====== CENTER AN IMAGE INSIDE OF DIV PROPORTIONALLY.
SIZE OF IMAGE OR DIV CAN CHANGE AND STILL WORKS. ======*/


var cw = 1000; // Container width
var ch = 650; // Container height
var iw = 480; // Image width
var ih = 640; // Image height

/* Set width and height of container and image by using the previous variables. */
document.getElementById("container").style.width = cw + 'px';
document.getElementById("container").style.height = ch + 'px';
document.getElementById("img").style.width = iw + 'px';
document.getElementById("img").style.height = ih + 'px';

/* The code will adjust the image to the size of the container,
so new width and height must be created for final result*/
var newiw;
var newih;

/* If image height is larger than it's width, or if they're the same... */
if ( ih > iw || ih == iw ) {
  /* Make image's new height the same as the container's */
  newih = ch;
  document.getElementById("img").style.height = newih + 'px';
  /* In order to adjust the size of the image proportionally, the new width
  should be the result of a math operation by simple rule of three */
  newiw = ch * iw / ih;
  document.getElementById("img").style.width = newiw + 'px';

  /* If the new size of the image overflows the container because of it's new
  width, then it's readjusted */
  if ( newiw > cw ) {
    /* Make image's new width the same as the container's */
    newiw = cw;
    document.getElementById("img").style.width = newiw + 'px';
    /* Now the height is obtained by simple rule of three */
    newih = cw * ih / iw;
    document.getElementById("img").style.height = newih + 'px';
  }
}

/* If however the height of the image is smaller than it's width... */
else {
  /* The image adjusts its width to the container's... */
  newiw = cw;
  document.getElementById("img").style.width = newiw + 'px';
  /* ...and gets the new height by simple rule of three */
  newih = cw * ih / iw;
  document.getElementById("img").style.height = newih + 'px';

  /* Same as before, if in this case the image's new height overflows the
  container's, it readjusts itself to fit inside */
  if ( newih > ch ) {
    newih = ch;
    document.getElementById("img").style.height = newih + 'px';
    newiw = ch * iw / ih;
    document.getElementById("img").style.width = newiw + 'px';
  }
}


console.log("The container is " + cw + " px wide and " + ch + " px high. The image inside it is " + iw + " px wide and " + ih + " px high. If the image is adjusted to fit inside it, it's new measurements are "
 + newiw + " px wide and " + newih + " px high.");
