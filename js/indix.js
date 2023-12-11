// menu
let menu = document.getElementById("menu");
let list = document.getElementById("list");

menu.addEventListener("click", function () {
	list.classList.toggle("show");
});
// slider
const sliders = document.querySelectorAll(".slide");
let currentSlideIndex = 0; // Keeps track of the current slide index

// Function to display the current slide and hide others
function showSlide(index) {
	sliders.forEach((slider, i) => {
		if (i === index) {
			slider.style.opacity = "1";
			slider.style.transition = "opacity 1.5s";
			slider.style.zIndex = "1";
		} else {
			slider.style.opacity = "0";
			slider.style.transition = "none";
			slider.style.zIndex = "0";
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

// Automatically change slide every 5 second
setInterval(showNextSlide, 5000);

// animation for home
let cl = gsap.timeline();
cl.from(".header_logo h2, nav ul li", {
	opacity: 0,
	duration: 0.5,
	y: -100,
	delay: 0.3,
	stagger: 0.2,
});
cl.from(".slide_container h1, .slide_container h2", {
	opacity: 0,
	duration: 0.5,
	y: 400,
	delay: 0.3,
	stagger: 0.2,
	ease: "bounce.ease",
});

// feature section
let feature = gsap.timeline();
feature.from(".feature_header h2, .feature_header p", {
	opacity: 0,
	duration: 0.5,
	x: 200,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".feature",
		scroller: "body",
		start: "top 30%",
		end: "top 90%",
		// markers: true,
		scrub: 3,
	},
});
feature.from(".feature_list", {
	opacity: 0,
	duration: 1.5,
	delay: 0.3,
	y: -200,
	stagger: 1.5,
	scrollTrigger: {
		trigger: ".feature",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 4,
	},
});

//about section
let about = gsap.timeline();
about.from(".about_header h2", {
	opacity: 0,
	duration: 0.5,
	delay: 0.3,
	y: -200,
	scrollTrigger: {
		trigger: ".about",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 2,
	},
});
about.from(".about_header p", {
	opacity: 0,
	duration: 0.5,
	delay: 0.5,
	y: 200,
	scrollTrigger: {
		trigger: ".about",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 4,
	},
});
about.from("#about_list_1", {
	opacity: 0,
	duration: 0.5,
	delay: 0.7,
	x: -400,
	stagger: 1.5,
	scrollTrigger: {
		trigger: ".about",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 4,
	},
});
about.from("#about_list_2", {
	opacity: 0,
	duration: 0.5,
	delay: 0.9,
	x: 400,
	scrollTrigger: {
		trigger: ".about",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 2,
	},
});

//team section
gsap.from(".team_header h2, .team_header p", {
	opacity: 0,
	duration: 0.7,
	delay: 0.5,
	x: 400,
	stagger: 0.5,
	scrollTrigger: {
		trigger: ".team",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 4,
	},
});
gsap.from(".team_list", {
	opacity: 0,
	duration: 0.7,
	delay: 0.5,
	y: 400,
	stagger: 0.5,
	scrollTrigger: {
		trigger: ".team",
		scroller: "body",
		start: "top 30%",
		end: "top 60%",
		scrub: 5,
	},
});
