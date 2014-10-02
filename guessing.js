$(document).ready(function() {

	var hits = 0;
	var misses = 0;


	$('.effect').on('click', function() {
		hits++;
		$(this).addClass('effected');
		$('footer').html('<p>You hit the dragon!</p>');
		endGame();
	});

	$('.noEffect').on('click', function() {
		misses++;
		$('#dragon').animate({left: '-=6em'}, 1000);
		$(this).addClass('uneffected');
		$('footer').html('<p>That weapon had no effect!</p>');
		endGame();
	});

	var endGame = function() {
		if (hits === 5) {
		$('footer').html('<p>You killed the dragon!</p>');
		$('.effect').css('pointer-events', 'none');
		$('.noEffect').css('pointer-events', 'none');
		} else if (misses === 3) {
			$('footer').html('<p>The dragon ate you!</p>');
			$('.effect').css('pointer-events', 'none');
			$('.noEffect').css('pointer-events', 'none');
		}
	}
	

});
