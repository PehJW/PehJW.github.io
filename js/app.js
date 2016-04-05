$(document).ready(function(){	



	$(".button-projects1").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects1").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1500, "easeInOutQuart");
	});

	$(".button-projects2").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects2").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1500, "easeInOutQuart");
	});

	$(".button-projects3").click(function(event){
		event.preventDefault();
		var goTopPosition = $(".projects3").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1500, "easeInOutQuart");
	});

	$(".button-projects1").click(goToProjects1);
	$(".button-projects2").click(goToProjects2);
	$(".button-projects3").click(goToProjects3);

	
});

$(window).load(function() {
		$(".loader").fadeOut("fast");
		})

function goToProjects1 (event) {
	event.preventDefault();
	var goTopPosition = $(".projects1").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

function goToProjects2 (event) {
	event.preventDefault();
	var goTopPosition = $(".projects2").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

function goToProjects3 (event) {
	event.preventDefault();
	var goTopPosition = $(".projects3").offset().top;
		$("html, body").animate({ scrollTop:goTopPosition }, 1000, "easeInOutQuart");
}

