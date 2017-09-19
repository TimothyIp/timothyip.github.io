"use strict";

var app = {};

app.events = function () {
	$(".menu").click(function () {
		$(".one").toggleClass("one-ani");
		$(".two").toggleClass("two-ani");
		$(".drawer").toggleClass("drawer__slide");
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 1) {
			$('.navbar').addClass('sticky');
			$(".top .bar").css('background-color', '#000');
		} else {
			$('.navbar').removeClass('sticky');
			$(".top .bar").css('background-color', '#fff');
		}
	});
};

app.introAnim = function () {
	setTimeout(function () {
		$(".intro__container").css("opacity", 1);
	}, 2400);

	setTimeout(function () {
		$(".intro__container").css('width', '18.75rem');
	}, 3000);

	setTimeout(function () {
		$(".intro__container h1").addClass("fadeIn");
	}, 3250);

	setTimeout(function () {
		$(".intro__container p").addClass("fadeIn");
	}, 3500);
	setTimeout(function () {
		// $("video").fadeOut("slow");
		$("video").css("opacity", 0);
		$("#intro").fadeIn("slow").css("background", "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/public/assets/2212.jpeg')");
	}, 13600);
};

app.init = function () {
	app.events();
	app.introAnim();
};

$(function () {
	app.init();
	var scroll = new SmoothScroll('a[href*="#"]');
	setTimeout(function () {
		$(".loading__container").fadeOut("slow");
	}, 1600);
});