let menu = document.getElementById("menu");
let list = document.getElementById("list");

menu.addEventListener("click", function () {
	console.log("hello");
	if (list.style.transform === "translateY(-418px)") {
		list.style.transform = "translateY(0px)";
	} else {
		list.style.transform = "translateY(-418px)";
	}
});
const sliders = document.querySelectorAll(".slide");
let currentSlideIndex = 0; // Keeps track of the current slide index

// Function to display the current slide and hide others
function showSlide(index) {
	sliders.forEach((slider, i) => {
		if (i === index) {
			slider.style.opacity = "1";
			// slider.style.display = "block";
			slider.style.transition = "opacity 0.5s";
		} else {
			slider.style.opacity = "0";
			// slider.style.display = "none";
			slider.style.transition = "none";
		}
	});
}

// Function to show the next slide
function showNextSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % sliders.length;
	showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);

// Automatically change slide every 1 second
setInterval(showNextSlide, 3000);
