$(document).ready(function() {

	function getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	function renderCellWrap(size,i_max,n_max){

		$("#score, #result").html(0);

		var arrayEmojiEasy = [	"emoji1f46c", "emoji1f46c",	"emoji1f413", "emoji1f413",	"emoji1f3c8", "emoji1f3c8",	"emoji1f68d", "emoji1f68d",	"emoji1f496", "emoji1f496",	"emoji2615", "emoji2615",	"emoji1f31a", "emoji1f31a",	"emoji1f30d", "emoji1f30d",	"emoji2708", "emoji2708",	"emoji1f354", "emoji1f354",	"emoji1f4f7", "emoji1f4f7",	"emoji1f3b1", "emoji1f3b1",	"emoji1f340", "emoji1f340",	"emoji1f48a", "emoji1f48a",	"emoji1f699", "emoji1f699",	"emoji1f47d", "emoji1f47d",	"emoji1f694", "emoji1f694",	"emoji1f451", "emoji1f451",	"emoji270f", "emoji270f",	"emoji26a1", "emoji26a1",	"emoji1f4b0", "emoji1f4b0",	"emoji1f3c9", "emoji1f3c9",	"emoji1f60d", "emoji1f60d",	"emoji1f425", "emoji1f425", "emoji1f680", "emoji1f680", "emoji1f411", "emoji1f411", "emoji1f60a", "emoji1f60a", "emoji1f437", "emoji1f437", "emoji1f473", "emoji1f473", "emoji1f6a0", "emoji1f6a0","emoji1f36b", "emoji1f36b", "emoji1f3c0", "emoji1f3c0" ];
		
		$(".cell-wrapper").remove();

		var $cellWrapper = $('<div class="cell-wrapper cell-wrapper_' + size + '"/>');
		$(".game-container").append( $cellWrapper );
		
		for (var i = 1; i < i_max; i++) {

			var n = n_max - i;
			var rand = Math.round(getRandomArbitrary(0, n));
			var emojiNum = arrayEmojiEasy[rand];

			var $emoji = $('<span class="emoji ' + emojiNum + '" data-value="' + emojiNum + '"/>');
			var $cell = $('<span class="cell hidden"/>').append($emoji);

			arrayEmojiEasy.splice(rand,1);

			$(".cell-wrapper").append( $cell );
		}

		var gameContainerWidth = $(".cell-wrapper").width();
		$(".cell-wrapper").height( gameContainerWidth );	
	}

	$(".easy").on("click", function(){renderCellWrap(44, 17, 16)});
	$(".medium").on("click", function(){renderCellWrap(66, 37, 36)});
	$(".hard").on("click", function(){renderCellWrap(88, 65, 64)});

	$(".cell.hidden").live("click", function(){

		var score = +$("#score").html()+1;
		$("#score, #result").html(score);

		$(this).removeClass("hidden").addClass("show");

		if($(".cell.show").length>=2){
			var val1 = $(".cell.show").eq(0).children(".emoji").data("value");
			var val2 = $(".cell.show").eq(1).children(".emoji").data("value");

			if(val1 == val2){
				
				$(".cell.show").removeClass("hidden show");

				if($(".cell.hidden").length==0){
					$(".result-block-wrap").removeClass("hide");
				}
			}else{
				$(".cell-wrapper").addClass("no_active");

				function closeCell(){
					$(".cell.show").removeClass("show").addClass("hidden");
					$(".cell-wrapper").removeClass("no_active");
				}

				setTimeout(closeCell, 400);				
			}
		}

	})
});