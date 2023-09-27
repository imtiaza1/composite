let menu = document.getElementById("menu");
let list = document.getElementById("list");

menu.addEventListener("click", function () {
	console.log("hello");
	if (list.style.top === "-48rem" || list.style.top === "0") {
		list.style.top = "8rem";
	} else {
		list.style.top = "-48rem";
	}
});
