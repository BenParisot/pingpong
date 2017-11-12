//backend logic


//fronted logic
$(document).ready(function() {
	$("#input").submit(function(event) {
		event.preventDefault();
		var numInput = parseInt($("#number").val());
		var numList = [];
		for (var i =1; i <= numInput; i += 1) {
			if (i % 15 === 0) {
				var node = document.createElement("LI");
				var textNode = document.createTextNode("pingpong");
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



				// var listItem = document.createElement('li');
				// var listItemVal = document.createTextNode("pingpong")
			// 	// listItem.appendChild(document.createTextNode("pingpong"));
			// 	// finaList.appendChild(listItem);
			//
			// 	// $("#list-item").text("pingpong");
			// 	// numList.push("pingpong");
			// }
			// else if (index % 5 === 0) {
			// 	var listItem = document.createElement('li');
			// 	listItem.appendChild(document.createTextNode("pong"));
			// 	finaList.appendChild(listItem);
			//
			// 	// $("#list-item").text("pong");
			// 	// numList.push("pong");
			// }
			// else if (index % 3 === 0) {
			// 	var listItem = document.createElement('li');
			// 	listItem.appendChild(document.createTextNode("ping"));
			// 	finaList.appendChild(listItem);
			//
			// 	// $("#list-item").text("ping");
			//   // numList.push("ping");
			// // }
			// else {
			// 	alert("no");
				//$("#list-item").text(index);
				// var listItem = document.createElement('li');
				// listItem.appendChild(document.createTextNode(index));
				// finaList.appendChild("hi");
			// }





		//$("#list-main").text(numList);
		//var finalList = numList.join(" ");

// 		console.log(numList);
// 	};
//
// });
