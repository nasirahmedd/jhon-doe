$('#nav').onePageNav({
	scrollSpeed: 0,
	scrollThreshold: .5,
});

const nav = document.querySelector('.navbar');
const scrollUp = document.querySelector('.scroll-up');
window.addEventListener('scroll', () => {
	const scrollHeight = window.pageYOffset;
	const navHeight = nav.getBoundingClientRect().height;
	if (scrollHeight > navHeight) {
		nav.classList.add('fixed-nav')
	} else {
		nav.classList.remove('fixed-nav')
	}
	if (scrollHeight > 500) {
		scrollUp.classList.add('show-link');
	} else {
		scrollUp.classList.remove('show-link');

	}
});
$('.nav-link').click(function () {
	$('.navbar-collapse').collapse('hide');
});

const linksContainer = document.querySelector("#navbarNav");
const navbar = document.querySelector(".navbar");
const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		// prevent default
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);

		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains("fixed-nav");
		let position = element.offsetTop - navHeight;

		if (!fixedNav) {
			position = position - navHeight;
		}
		if (navHeight > 82) {
			position = position + containerHeight;
		}
		window.scrollTo({
			left: 0,
			top: position,
		});
	});
});


const navLink = document.querySelectorAll('.nav-item');
navLink.forEach(function (nav) {
	nav.addEventListener('click', function () {
		navLink.forEach((e) => {
			e.classList.remove('active');
			this.classList.add('active');
		})
	})
});