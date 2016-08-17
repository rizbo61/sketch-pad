$(document).ready(function() {
    /*createGrid();*/
    paintGrid();
    showBorder();
});

function createGrid() {
    $(".grid").remove();

    var gridSize = prompt("How big do you want the grid to be? Entering for example '60' will make a 60x60 grid.");
    
    if (isNaN(gridSize)) {
        alert("You need to enter a number.");
    }

    var boxSize = Math.floor(960 / gridSize);
    
    var count = 0;
    
    while (count < (gridSize * gridSize)) {  
         $("#container").append('<div class="grid"></div>');
         count++;
    } 
    
    $(".grid").height(boxSize).width(boxSize);
    $("#container").height(boxSize * gridSize).width(boxSize * gridSize);

    $("#container").css("visibility", "visible").hide().fadeIn(2000);
}

function paintGrid() {
    var randomColor = function rgb() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
    };

    var selectedColor = $("#color").val(); 

    switch (selectedColor) {
        case "black":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "black");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "silver":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "silver");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "gray":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "gray");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "maroon":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "maroon");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "red":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "red");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "purple":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "purple");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "fuchsia":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "fuchsia");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "green":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "green");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "lime":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "lime");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "olive":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "olive");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "yellow":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "yellow");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "navy":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "navy");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "blue":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "blue");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "teal":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "teal");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "aqua":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "aqua");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "orange":
        $(".grid").on("mousedown mouseover", function(e){
            e.preventDefault();
            if (e.which === 1) {
                $(this).css("background-color", "orange");
            }   else if (e.which === 2) {
                    $(this).css("background-color", "transparent");
                }
        });
        break;
        case "random":
            $(".grid").on("mousedown mouseover", function(e){
                e.preventDefault();
                $(this).css("transition", "all .25s ease-in-out");
                if (e.which === 1) {
                    $(this).css("background-color", randomColor);
                }   else if (e.which === 2) {
                        $(this).css("background-color", "transparent");
                    }
            });
        break;
        default:
    }
}

function showBorder() {
    var border = $("#border").is(":checked");

    if (border === true) {
       $(".grid").css({
           "outline": "1px solid",
           "transition": "background-color .25s, outline-color .5s",
           "outline-color": "#F0F0F0"
        });
    } else {
        $(".grid").css({
            "transition": "background-color .25s, outline-color .5s",
            "outline-color": "transparent"
        });
    }
}


$("button, #color, #border").hover(function() {
    $(this).css("box-shadow", "0px 0px 2px 2px #F0F0F0");
}, function() {
    $(this).css("box-shadow", "");
});

$("#new-grid").click(function() {
    createGrid();
    paintGrid();
    showBorder();
});

$("#clear-grid").click(function() {
    $(".grid").css("background-color", "transparent");
    paintGrid();
});

$("#color").change(function() {
    paintGrid();
});

$("#border").change(function() {
    showBorder();
});





