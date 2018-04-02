var inventory = [];

document.getElementById("s1").style.display = "block";

document.getElementById("s1d1").addEventListener("click", function(){
//document.getElementById("s1").style.display = "none";
document.getElementById("s1d1").style.display = "block";
document.getElementById("s1d2").style.display = "none";
document.getElementById("s2").style.display = "block";

});

document.getElementById("s1d2").addEventListener("click", function s1d2(){
document.getElementById("s1d1").style.display = "none";
document.getElementById("s1d2").style.display = "block";
document.getElementById("s1d2a").style.display = "block";
document.getElementById("continue").style.display = "block";
});

document.getElementById("continue").addEventListener("click", function continueGame(){
document.getElementById("continue").style.display = "none";
document.getElementById("s2").style.display = "block";
});


document.getElementById("s2d1").addEventListener("click", function scene2(){
document.getElementById("s2d2").style.display = "none";
document.getElementById("s3").style.display = "block";
});

document.getElementById("s3").addEventListener("click", function scene3d1(){
document.getElementById("s3d1").style.display = "block";
document.getElementById("s3d2").style.display = "none";
document.getElementById("s4").style.display = "block";
});

document.getElementById("s4d1").addEventListener("click", function scene4d2(){
document.getElementById("s4d1").style.display = "none";
document.getElementById("s4d2").style.display = "block";
});

document.getElementById("s4d1").addEventListener("click", function scene4d1(){
document.getElementById("s4d1").style.display = "block";
document.getElementById("s4d2").style.display = "none";
document.getElementById("s5").style.display = "block";
});

document.getElementById("s5d1").addEventListener("click", function scene5(){
document.getElementById("key").style.display = "block";
});

document.getElementById("key").addEventListener("click", function key(){
document.getElementById("key").style.display = "block";
document.getElementById("survieGame").style.display = "block";
});

document.getElementById("surviveGame").addEventListener("click", function dub(){
document.getElementById("dub").style.display = "block";
});
