$(document).ready(function () {
	$(window).resize(function () {
		console.log($(window).width())
	})
})

$('#burger').click(function () {
	$('#mobile-nav').slideToggle();
})