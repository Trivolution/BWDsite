function hide_popup() {
    document.body.innerHTML += '' +
        '<style type="text/css">' +
        'div.popover {' +
        'display: none;' +
        '}' +
        '</style>';
    document.cookie = "age_verified_v2=yes;max-age=" + (10 * 365 * 24 * 60 * 60);
}
function do_age_verification() {
    var age_verified = (document.cookie.indexOf('age_verified_v2') != -1);
    if (!age_verified) {
        document.body.innerHTML += '' +
            '' +
            '<div class="popover" id="popover">' +
            '<div class="prompt">' +
            '<p class="question">' +
            '<img align="middle" class="logo" src="files/theme/popover_logo.png">' +
            '<br>' +
            '<img align="middle" class="question" src="files/theme/popover_are_you_21.png">' +
            '<br>' +
            '<img align="left" class="btn" src="files/theme/popover_yes.png" onclick="hide_popup()">' +
            '<a href="http://pbskids.org"><img align="right" class="btn" src="files/theme/popover_no.png"></a>' +
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
            'line-height: 5em;' +
            'padding: 10px;' +
            'background-color: #5d5d5d;' +
            'border: 2px solid #000;' +
            '/*border-radius: 20px;*/' +
            '}' +
            '' +
            'div.popover div.prompt p {' +
            'margin: 0;' +
            'padding: 20px;' +
            '}' +
            '' +
            'div.popover div.prompt img.logo {' +
            'width: 100%;' +
            '}' +
            '' +
            'div.popover div.prompt img.question {' +
            'height: 1.5em;' +
            'width: auto;' +
            '}' +
            '' +
            'div.popover div.prompt img.btn {' +
            'margin-top: 10px;' +
            'margin-bottom: 10px;' +
            'height: 1.5em;' +
            'width: auto;' +
            '}' +
            '' +
            'div.popover div.prompt p.question {' +
            'text-align: center;' +
            'font-size: 1.5em;' +
            'color: #fff;' +
            '}' +
            '' +
            '@media screen and (max-width: 600px) {' +
            'div.popover div.prompt {' +
            'position: fixed;' +
            'width: 90vw;' +
            'margin-left: auto;' +
            'margin-right: auto;' +
            'left: auto;' +
            'top: 20%;' +
            'line-height: 5em;' +
            'padding: 10px;' +
            'background-color: #5d5d5d;' +
            'border: 2px solid #000;' +
            '}' +
            '}' +
            '</style>';
    }
}
window.onload = do_age_verification;
//jQuery("document").ready(do_age_verification);
// do_age_verification();
