var inventory = [];


inventory.push("Flashlight");
document.getElementById("inventoryBox").innerHTML = inventory;
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

document.getElementById("s2d2").addEventListener("click", function scene2d2(){
document.getElementById("s2d2").style.display = "block";
document.getElementById("s3").style.display = "block";
});

document.getElementById("s3").addEventListener("click", function scene3d1(){
document.getElementById("s3d1").style.display = "block";
document.getElementById("s3d2").style.display = "none";
document.getElementById("s4").style.display = "block";
inventory.push("Hammer");
inventory.push("Flashlight");
document.getElementById("inventoryBox").innerHTML = inventory;
});

document.getElementById("s4d1").addEventListener("click", function scene4d2(){
document.getElementById("s4d1").style.display = "none";
document.getElementById("s4d2").style.display = "block";
});

document.getElementById("s4d2").addEventListener("click", function scene4d2a(){
document.getElementById("s4d1").style.display = "none";
document.getElementById("s4d2").style.display = "block";
document.getElementById("s4d2a").style.display = "block";
});

document.getElementById("s4d2a").addEventListener("event", function sceneEndGame(){
  inventory.pop();
  document.getElementById("inventoryBox").innerHTML = inventory;
document.getElementById("s4d1").style.display = "none";
document.getElementById("s4d2").style.display = "block";
});
