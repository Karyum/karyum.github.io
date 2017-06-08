var picCount=0; // global
var picArray= ["./images/pic2.jpg","./images/pic3.jpg","./images/pic4.jpg","./images/pic5.jpg","./images/pic6.jpg", "./images/pic1.jpg"]

// gets next picture in array
function nextPic()
{ // check if adding 1 exceeds number of pics in array
picCount=(picCount+1<picArray.length)? picCount+1 : 0;
// build the img to write to page using the new pic reference
var build='<img src="'+picArray[picCount]+'">\
';
document.querySelector(".image-container").innerHTML=build;
// repeat this after a puse of 2000ms (2sec).
setTimeout('nextPic()',5000)
}
