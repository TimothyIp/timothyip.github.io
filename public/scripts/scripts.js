"use strict";

var app = {};

app.events = function () {
	$(".whopper").click(function () {
		console.log("clicked");
		$(".one").toggleClass("one-ani");
		$(".two").toggleClass("two-ani");
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
		$("video").fadeOut();
		$("#intro").addClass("fadeIn").css("background", "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/public/assets/2212.jpeg')");
	}, 13650);
};

app.init = function () {
	app.events();
	app.introAnim();
};

$(function () {
	app.init();
	setTimeout(function () {
		$(".loading__container").fadeOut("slow");
	}, 1600);
});