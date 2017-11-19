$(document).ready(function() {
	
	function gameContainerRiseze(){
		var gameContainerWidth = $(".cell-wrapper").width();
		$(".cell-wrapper").height(gameContainerWidth);	
	}

	gameContainerRiseze();

	$(".level").on("mouseup", function(){gameContainerRiseze()})
	$(window).on('resize', function(){gameContainerRiseze()});

	$(".level").on("click", function(){
		$(".blank-block-wrap").addClass("hide");
	});

	$(".start-game").on("click", function(){
		
		var that = $(this).parent().parent();
		
		that.addClass("hide");
		$(".set-level-wrap").removeClass("hide");
	});
});