/* run each of these code blocks in the javascript dev console
 * while on the menu webpage, and it will print some basic HTML
 * which I use as a starting point for the webpage */


/*get all the food titles*/
var list = document.getElementsByClassName("fl2");
var out = "";
for (i=0; i<list.length; i++) {
	var title = list[i].getElementsByClassName("ftitle2")[0];
	var content_left = list[i].getElementsByClassName("fcont2")[0];
	var content_right = list[i].getElementsByClassName("dtlright")[0];
	out += '<h3 class="food_title">' + title.innerHTML + '</h3>\n';
	out += '<div class="food_description">' + content_left.innerHTML + '</div>\n';
	if (/\S/.test(content_right.innerHTML)) {
		/*content right isn't empty*/
		out += '<p class="food_beer_pairing">' + content_right.innerHTML + '</p>\n';
	}
}




/*get the food section headings*/
var list = document.getElementsByClassName("redback2title");
var out = "";
for (i=0; i<list.length; i++) {
	out += '<h2 class="food_title">' + list[i].innerHTML + '</h2>\n';
}