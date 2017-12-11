var txt = document.querySelector('#datapodtxt');
var img = document.querySelector('#datapodimg');
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