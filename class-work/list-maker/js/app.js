// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list

// Bonus: Focus on #item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

$(document).ready(function () {
	$('#clickme').click (function () {
		var newItem = $('#item').val()


	$('#item').remove(newItem);
		
			appendItem(newItem)

	})



	function appendItem(newItem) {
		$('#list').text(newItem)
	}

