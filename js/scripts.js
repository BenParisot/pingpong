//backend logic
//var nums = [];


//fronted logic
$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		var numInput = parseInt($("#number").val());
		var numList = [];
		for (var index = 1; index <= numInput; index += 1) {
			alert(index);
			numList.push(index);
		};
		alert(numList);
	});

});
