//backend logic


//frontend logic
$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		$("#list").html("");
		var numInput = parseInt($("#number").val());
		if (isNaN(numInput)) {
			alert("OKay, wiseguy. Try again - and enter a real number this time.");
		}
		for (var i =1; i <= numInput; i += 1) {
			if (i % 15 === 0) {
				var node = document.createElement("LI");
				var textNode = document.createTextNode("chomp chomp chomp");
				node.appendChild(textNode);
				document.getElementById("list").appendChild(node);
				}
			else if (i % 5 === 0) {
				var node = document.createElement("LI");
				var textNode = document.createTextNode("nosh");
				node.appendChild(textNode);
				document.getElementById("list").appendChild(node);
			}
			else if (i % 3 === 0) {
				var node = document.createElement("LI");
				var textNode = document.createTextNode("nom");
				node.appendChild(textNode);
				document.getElementById("list").appendChild(node);
			}
			else {
				var node = document.createElement("LI");
				var textNode = document.createTextNode(i);
				node.appendChild(textNode);
				document.getElementById("list").appendChild(node);
			}
		}
	});
});
