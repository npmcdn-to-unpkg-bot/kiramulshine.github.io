// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

$(document).ready(function(){


var amount = 0;

$('#a10').click(addTen)
function addTen() {
	amount = amount + 10
	$('#out').html(amount);
}

$('#a20').click(addTwenty)
function addTwenty() {
	amount = amount + 20 
	$('#out').html(amount);
}

$('#a30').click(addThirty)
function addThirty() {
	amount = amount + 30 
	$('#out').html(amount);
}

$('#n10').click(minusTen)
function minusTen() {
	amount = amount - 10
	$('#out').html(amount);
}

$('#n20').click(minusTwenty)
function minusTwenty() {
	amount = amount - 20
	$('#out').html(amount);
}

$('#n30').click(minusThirty)
function minusThirty() {
	amount = amount - 30
	$('#out').html(amount);
}
		

$('#red').click(turnRed)
function turnRed (){
	$('#out').css('background', 'red')
}

$('#blue').click(turnBlue)
function turnBlue () {
	$('#out').css('background', 'blue')
}

$('#out').click(function(){
	amount = 0
	$('#out').html(amount)
	$('#out').css('background', 'white')
})

})
// $('#blue').click(turnBlue);
// $('#n10').click(minusTen);
// $('#n20').click(minusTwenty);
// $('#n30').click(minusThirty);

