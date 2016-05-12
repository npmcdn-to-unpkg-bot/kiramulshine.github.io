
$(document).ready(function () {
	var amount = 0;
	$('#entry').submit(function (event) {
		event.preventDefault();
	var newEntry = $('#newEntry').val();
		newEntry = parseFloat(newEntry);
	$('#entries').append('<tr><td></td><td>' + newEntry + '</td></tr>');
		amount = amount + newEntry
	$('#total').text('$' + amount);
	$('#newEntry').val('');
	});

})

