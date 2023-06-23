$(document).ready(function(){
	$(function() {
		$(".overlay_posters").draggable();
	});

	function int1(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	$('.over').dblclick(function(){
		$('.overlay_posters').css("background",`url("https://koud2.github.io/4Modul/images/overlay${int1(2, 21)}.svg")`);
		$('.overlay_posters').css("background-size","cover");
	});
});