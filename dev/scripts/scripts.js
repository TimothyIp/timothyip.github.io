const app = {};

app.events = () => {
	$(".whopper").click( () => {
		console.log("clicked")
		$(".one").toggleClass("one-ani");
		$(".two").toggleClass("two-ani");
	})
}

app.introAnim = () => {
	setTimeout(() => {
		$(".intro__container").css("opacity", 1);
	}, 2400)

	setTimeout(() => {
		$(".intro__container").css('width','18.75rem');
	},3000)

	setTimeout(() => {
		$(".intro__container h1").addClass("fadeIn");
	},3250)

	setTimeout(() => {
		$(".intro__container p").addClass("fadeIn");
	},3500)
	setTimeout(() => {
		$("video").bind('ended', function() {
			$(this).fadeOut();
			$("#intro").addClass("fadeIn").css("background", "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('/public/assets/2212.jpeg')");
		})
	},1650)

}

app.init = () => {
	app.events();
	app.introAnim();
}

$(function(){
	app.init();
	setTimeout(() => {
		$(".loading__container").fadeOut("slow");
	},1600)
});