function handle_popup() {
    var verified = false;
    if (document.getElementById("answer_yes").checked) {
        /*yes is checked, so the user is old enough*/
        document.body.innerHTML += '' +
            '<style type="text/css">' +
            'div.popover {' +
            'display: none;' +
            '}' +
            '</style>';
        document.cookie = "age_verified_v2=yes;max-age=" + (10 * 365 * 24 * 60 * 60);
    } else if (document.getElementById("answer_no").checked) {
        /*no is checked, redirect the user somewhere else*/
        window.location.href = "http://pbskids.org/";
    }
}
function do_age_verification() {
    var age_verified = (document.cookie.indexOf('age_verified_v2') != -1);
    if (!age_verified) {
        document.body.innerHTML += '' +
            '<div class="popover" id="popover">' +
            '<div class="prompt">' +
            '<p class="question">' +
            '<img align="middle" src="files/theme/popover_logo.png"> <br>' +
            '<img align="middle" src="files/theme/popover_are_you_21.png"> <br>' +
            '</p>' +
            '<div id="input_form">' +
            '<input type="radio" name="answer" id="answer_yes">' +
            '<label for="answer_yes">' +
            '<img align="middle" class="btn" src="files/theme/popover_yes.png"> <br>' +
            '</label>' +
            '<input type="radio" name="answer" id="answer_no">' +
            '<label for="answer_no">' +
            '<img align="middle" class="btn" src="files/theme/popover_no.png"> <br>' +
            '</label>' +
            '</div>' +
            '<p class="question">' +
            '<img align="middle" id="button_submit" onclick="handle_popup()" src="files/theme/popover_enter_button.png">' +
            '</p>' +
            '</div>' +
            '</div>' +
            '<style type="text/css" scoped>' +
            'div.popover {' +
            'position: absolute;' +
            'left: 0;' +
            'top: 0;' +
            'z-index: 50;' +
            'display: block;' +
            'width: 100%;' +
            'height: 100%;' +
            'padding: 10px;' +
            'max-width: none;' +
            'background-color: rgba(0, 0, 0, 0.5);' +
            '}' +
            '' +
            'div.popover div.prompt {' +
            'position: absolute;' +
            'width: 30%;' +
            'left: 35%;' +
            'top: 20%;' +
            'line-height: 40px;' +
            'padding: 10px;' +
            'background-color: #5d5d5d;' +
            'border: 2px solid #000;' +
            '/*border-radius: 20px;*/' +
            '}' +
            '' +
            'div.popover div.prompt p {' +
            'margin-bottom: 0;' +
            '}' +
            '' +
            'div.popover div.prompt img {' +
            'margin-bottom: 20px;' +
            'width: 70%;' +
            '}' +
            '' +
            'div.popover div.prompt .question {' +
            'text-align: center;' +
            'font-size: 1.5em;' +
            'color: #fff;' +
            '}' +
            '' +
            'div.popover div.prompt div#input_form {' +
            'line-height: 30px;' +
            'width: 120px;' +
            'margin: auto;' +
            '}' +
            '' +
            'div.popover div.prompt div#input_form img.btn {' +
            'margin-bottom: 0;' +
            'height: 30px;' +
            'width: auto;' +
            'display: inline-block;' +
            '}' +
            '' +
            'div.popover div.prompt label {' +
            'overflow: auto;' +
            '}' +
            '' +
            'div.popover div.prompt input[type="radio"] {' +
            'display: none;' +
            '}' +
            '' +
            'div.popover div.prompt input[type="radio"] + label:before {' +
            'display: inline-block;' +
            'content: "";' +
            'float: left;' +
            'background: url(files/theme/popover_checkbox_unchecked.png) top;' +
            'background-size: 30px 30px;' +
            'height: 30px;' +
            'width: 30px;' +
            '}' +
            '' +
            'div.popover div.prompt input[type="radio"]:checked + label:before {' +
            'content: "";' +
            'background: url(files/theme/popover_checkbox_checked.png);' +
            'background-size: 30px 30px;' +
            'height: 30px;' +
            'width: 30px;' +
            '}' +
            '' +
            'div.popover div.prompt img#button_submit {' +
            'margin-bottom: 0;' +
            '}' +
            '</style>';
    }
}
window.onload = do_age_verification;
//jQuery("document").ready(do_age_verification);
// do_age_verification();
