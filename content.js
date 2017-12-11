var obs = document.getElementsByTagName('div');
for (var i = 0, l = obs.length; i < l; i++) {
  if (/*Math.random() < 0.5 && */obs[i].id != 'datapodtxt') {
    obs[i].className += " kms";
  }
}
var obs = document.getElementsByTagName('p');
for (var i = 0, l = obs.length; i < l; i++) {
  if (/*Math.random() < 0.5 && */obs[i].id != 'datapodtxt') {
    obs[i].className += " kmsalso";
  }
}
var obs = document.getElementsByTagName('p');
for (var i = 0, l = obs.length; i < l; i++) {
  if (/*Math.random() < 0.5 && */obs[i].id != 'datapodtxt') {
    obs[i].className += " aaa";
  }
}
var obs = document.getElementsByTagName('a');
for (var i = 0, l = obs.length; i < l; i++) {
obs[i].setAttribute("href", "http://aisdwebfilter.austinisd.org/restricted.html?bu=" + obs[i].href + "&fn=&fp=Datapod%20lmao&ibip=mobilefilter.austinisd.org&ldu=0&re=0&ce=datapod&bc=Website%20contains%20prohibited%20garbage%20content.");
}
function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}
function fkkColors() {
  obs = document.getElementsByClassName('kms');
for (var i = 0, l = obs.length; i < l; i++) {
  obs[i].style.color="rgb("+Math.floor(Math.random()*128)+", 255, " + Math.floor(Math.random()*128) + ")";
}
  obs = document.getElementsByClassName('kmsalso');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.color="rgb("+Math.floor(Math.random()*128)+", 255, " + Math.floor(Math.random()*128) + ")";
  obs[i].style.backgroundColor = 'black';
}
}
function datapodify() {
obs = document.getElementsByTagName('img');
for (i = 0, l = obs.length; i < l; i++) {
  if (obs[i].id != 'datapodimg') {
  var height = obs[i].height;
  var width = obs[i].width;
  obs[i].src = "https://marcgilpin.files.wordpress.com/2013/01/datapod.jpg";
  obs[i].height = height;
  obs[i].width = width;
  }
}
obs = document.getElementsByTagName('body');
for (i = 0, l = obs.length; i < l; i++) {
  if (obs[i].id != 'databody') {
  obs[i].style.backgroundImage = 'url(https://marcgilpin.files.wordpress.com/2013/01/datapod.jpg)';
}
}
obs = document.getElementsByTagName('p');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('a');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('div');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('span');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h1');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h2');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h3');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h4');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h5');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
obs = document.getElementsByTagName('h6');
for (i = 0, l = obs.length; i < l; i++) {
  obs[i].style.fontFamily = "Comic Sans MS";
}
fkkColors();
}
setInterval(datapodify, 1000);
//This code is by Datapod/FireLion200 do not steal
