/* Purpose: The below given code is written to add functionality of "Read more" and "Read less" on
the Tips.html page.
*/

function showHide() {  // showHide function is called when user click on the button
  var less = document.getElementById("less");
  var moreImg = document.getElementById("more");
  var btnText = document.getElementById("showMore");

  if (less.style.display === "none") {  // The if-else condition is used to display code.
    less.style.display = "inline";
    btnText.innerHTML = "Read more"; // To change button text into "Read more"
    moreImg.style.display = "none"; // To hide images until user press "Show more" button
  } else {
    less.style.display = "none";
    btnText.innerHTML = "Read less"; // To change button text into "Read Less"
    moreImg.style.display = "inline"; // Images will be displayed with show less button on bottom.
  }
}
