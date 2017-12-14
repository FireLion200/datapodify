var txt = document.querySelector('#datapodtxt');
var img = document.querySelector('#datapodimg');
function getCSS(selector){
	var css = selector;
	if((Math.random() < 0.5)){
	  css += ":hover{font-size: 72px !important;}";
	}else{
	  css += ":hover{letter-spacing: 10px !important;}";
	}
	return css;
}
var c = getCSS("p");
chrome.tabs.insertCSS(null, {code: c},function() {
	if (chrome.extension.lastError) {
		txt.innerText = "Lmao this page is shit fuck you";
		img.src=chrome.extension.getURL('datapodblocked.jpg');
	} else {
		txt.innerText = "Datpodified ur page lmao";
				img.src=chrome.extension.getURL('datapodlmao.jpg');
	}
});
chrome.tabs.executeScript(null, {file: "content.js"},function() {
	if (chrome.extension.lastError) {
		txt.innerText = "Lmao this page is shit fuck you";
		img.src=chrome.extension.getURL('datapodblocked.jpg');
	} else {
		txt.innerText = "Datpodified ur page lmao";
				img.src=chrome.extension.getURL('datapodlmao.jpg');
	}
});

//This code is by Datapod/FireLion200 do not steal
