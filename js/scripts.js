//backend logic
var nums = [];


//fronted logic
$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		var numInput = $("#number").val();
		alert(numInput);
		console.log(numInput);

	});

});
