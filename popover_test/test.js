function hide_popup() {
	// var x = document.getElementById("popover");
	// if (x !== null) {
	// 	x.style.display = 'none';
	// }
	document.body.innerHTML += '' +
		'<style type="text/css">' +
			'div.popover {' +
				'display: none;' +
			'}' +
		'</style>'
	document.cookie = "age_verified_v2=yes;max-age=" + (10 * 365 * 24 * 60 * 60);
}
function do_age_verification() {
	var age_verified = (document.cookie.indexOf('age_verified_v2') != -1);
	if (!age_verified) {
		var prompt = '' + 
			'<div class="popover" id="popover">' +
				'<div class="prompt">' +
					'<p class="question">' +
						// '<img align="middle" src="1452356707.png">' +
						// '<br>' +
						'Are you over 21?' +
					'</p>' +
					'<div class="answer" id="yes">' +
						'<a class="answer" id="yes" href="#" onclick="hide_popup()">yes</a>' +
					'</div>' +
					'<div class="answer" id="no">' +
						'<a class="answer" id="no" href="http://pbskids.org/">no</a>' +
					'</div>' +
				'</div>' +
			'</div>' + 
			'<style type="text/css">' +
			'div.popover {' +
				'position: absolute;' +
				'left: 0px;' +
				'top: 0px;' +
				'z-index: 50;' +
				'display: block;' +
				'width: 100%;' +
				'height: 100%;' +
				'padding: 10px;' +
				'max-width: none;' +
				'background-color: rgba(0,0,0,0.5);' +
			'}' +
			'div.popover div.prompt {' +
				'position: absolute;' +
				'width:  30%;' +
				'left: 35%;' +
				'top:  20%;' +
				'padding: 10px;' +
				'background-color: #000;' +
				'border: 3px solid #000;' +
				'border-radius: 20px;' +
			'}' +
			'div.popover div.prompt img {' +
				// 'margin: auto;' +
				'margin: 20px;' +
			'}' +
			'div.popover div.prompt .question {' +
				'text-align: center;' +
				'font-size: 1.5em;' +
				'color: #fff;' +
			'}' +
			'div.popover div.prompt div.answer {' +
				'display: inline-block;' +
				'float: left;' +
				'width: 50%;' +
				'margin: auto;' +
			'}' +
			'div.popover div.prompt a.answer {' +
				'text-align: center;' +
				'display: block;' +
				'float: center;' +
				'margin: auto;' +
				'margin: 8px;' +
				'color: #000;' +
				'background: #fff;' +
				'border: 1px solid #fff;' +
				'border-radius: 10px;' +
			'}' + 
			'</style>'
		document.body.innerHTML += prompt;
	}
};
// do_age_verification();
// window.onload = do_age_verification;
jQuery("document").ready(do_age_verification);
