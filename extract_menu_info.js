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
for (var i=0; i<list.length; i++) {
	out += '<h2 class="food_title">' + list[i].innerHTML + '</h2>\n';
}




/*get a more complete rendering*/
var out = "";
var top_menu_element = document.getElementById("content-food");
var elements = top_menu_element.children;
for (var i=0; i < elements.length; i++) {
	console.log(i);
	if (elements[i].classList.length > 0) {
		if (elements[i].classList.contains("redback2")) {
			/*found a section heading title*/
			out += '<h2 class="food_title">' + elements[i].getElementsByClassName("redback2title")[0].innerHTML + '</h2>\n';
		} else if (elements[i].classList.contains("foodlisting")) {
			/*found a menu listing*/
			var list = elements[i].getElementsByClassName("fl2");
			for (var j=0; j<list.length; j++) {
				var title = list[j].getElementsByClassName("ftitle2")[0];
				var content_left = list[j].getElementsByClassName("fcont2")[0];
				var content_right = list[j].getElementsByClassName("dtlright")[0];
				out += '<h3 class="food_title">' + title.innerHTML + '</h3>\n';
				out += '<div class="food_description">' + content_left.innerHTML + '</div>\n';
				if (/\S/.test(content_right.innerHTML)) {
					/*content right isn't empty*/
					out += '<p class="food_beer_pairing">' + content_right.innerHTML + '</p>\n';
				}
			}
		}
	}
}