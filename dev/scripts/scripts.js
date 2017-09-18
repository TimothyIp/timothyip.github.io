const app = {};

app.events = () => {
	$(".menu").click(() => {
		$(".one").toggleClass("one-ani");
		$(".two").toggleClass("two-ani");
		$(".drawer").toggleClass("drawer__slide")
		
	})

	$(window).scroll(function() {
			if ($(window).scrollTop() > 100) {
				$('.navbar').addClass('sticky');
				$(".bar").css('background-color', '#000');
			} else {
				$('.navbar').removeClass('sticky');
				$(".bar").css('background-color', '#fff');
			}
		});
}

app.introAnim = () => {
	setTimeout(() => {
		$(".intro__container").css("opacity", 1);
	}, 2400)

	setTimeout(() => {
		$(".intro__container").css('width', '18.75rem');
	}, 3000)

	setTimeout(() => {
		$(".intro__container h1").addClass("fadeIn");
	}, 3250)

	setTimeout(() => {
		$(".intro__container p").addClass("fadeIn");
	}, 3500)
	setTimeout(() => {
		// $("video").fadeOut("slow");
		$("video").css("opacity", 0);
		$("#intro").fadeIn("slow").css("background", "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/public/assets/2212.jpeg')")
	}, 13600)


}


app.init = () => {
	app.events();
	app.introAnim();
}



$(function () {
	// app.googleMaps();
	app.init();
	var scroll = new SmoothScroll('a[href*="#"]')
	setTimeout(() => {
		$(".loading__container").fadeOut("slow");
	}, 1600)
});