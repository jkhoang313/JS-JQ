$(document).ready(function() {
	var square_size = 500/16 - 2;

	for(var i = 1; i <= 16; i++){
		for(var j = 1; j <= 16; j++){
			$('#grid').append('<div class="square"></div>')
		};
	};

	$(".square").css("height", square_size);
	$(".square").css("width", square_size);
});


var start = function() {
	var input = prompt("Pick a number between 1 and 64");

	if (input > 0 && input < 64) {
	$("#grid").remove();
	$('<div id="grid"></div>').appendTo(".container");

	var square_size = 500/input - 2;

	for(var i = 1; i <= input; i++){
		for(var j = 1; j <= input; j++){
			$('#grid').append('<div class="square"></div>')
		};
	};
	} else {
		alert("Pick a valid number!");
};

	$(".square").css("height", square_size);
	$(".square").css("width", square_size);
};

$(document).on("mouseenter", ".square", function() {
	$(this).addClass("darken");
});

$(document).on("click", ".square", function() {
	$(this).removeClass("darken");
});


