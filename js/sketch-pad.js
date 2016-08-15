$(document).ready(function() {
    createGrid();
    hover();
    showBorder();
});

function createGrid() {
    $("#container > div").remove();

    var gridSize = prompt("How big do you want the grid to be? Entering for example '60' will make a 60x60 grid.");
    
    if (isNaN(gridSize)) {
        alert("You need to enter a number.");
    }

    var boxSize = Math.floor(960 / gridSize);
    
    var count = 0;
    
    while (count < (gridSize * gridSize)) {  
         $("#container").append("<div></div>");
         count++;
    } 
    
    $("#container > div").height(boxSize).width(boxSize);

    $("#container").css("visibility", "visible").hide().fadeIn(2000);
}

function hover() {
    $("#container > div").css("background-color", "transparent");

    var randomColor = function rgb() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
    };

    var selectedColor = $("select[name=color]").val(); 

    if (selectedColor === "black-white") {
        $("#container > div").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "black");
            } else if (e.which === 2) {
                $(this).css("background-color", "white");
            }
        });
    }   else if (selectedColor === "colored") {
            $("#container > div").on("mousedown mouseover", function(e){
                e.preventDefault();
                if (e.which === 1) {
                    $(this).css("background-color", randomColor);
                } else if (e.which === 2) {
                    $(this).css("background-color", "white");
                }
            });
        }
}

function showBorder() {
    var border = $("input[type=checkbox]").is(":checked");

    if (border === true) {
       /*$("#container > div").css({"outline": "1px solid", "transition-property": "outline-color", "transition-duration": ".5s", "outline-color": "#F0F0F0"});*/
       $("#container > div").css("outline", "1px solid #F0F0F0");
    } else {
        /*$("#container > div").css({"transition-property": "outline-color", "transition-duration": ".5s", "outline-color": "transparent"});*/
        $("#container > div").css("outline", "transparent");
    }
}

/*$("#container").click(function() {
   alert($("#container > div").length + " boxes.");
});*/

$("#clear-grid").click(function() {
    hover();
});

$("#new-grid").click(function() {
    createGrid();
    hover();
    showBorder();
});

$("select[name=color]").change(function() {
    hover();
});

$("input[type=checkbox]").change(function() {
    showBorder();
});





