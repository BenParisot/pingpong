//backend logic
//var nums = [];


//fronted logic
$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		var numInput = parseInt($("#number").val());
		var numList = [];
		for (var index = 1; index <= numInput; index += 1) {
			if (index % 15 === 0) {
				numList.push("pingpong");
			}
			else if (index % 5 === 0) {
				numList.push("pong");
			}
			else if (index % 3 === 0) {
			 numList.push("ping");
			}
			else {
				numList.push(index);
			}

		};
		var finalList = numList.join(" ");
		console.log(finalList);
	});

});
