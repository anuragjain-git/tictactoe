const board = document.querySelector("#board");
let player = "X";
$("p").hide();
var w = 0;
board.addEventListener("click", function(event) {

    if(event.target.textContent != "") {
        return;
    }

    // Assign player
    else {
        event.target.textContent = player;
    }
    
    // Check for win

    if(win()) {
        // $("#p").show();
        $("#p").text(player+' Won');
        if(player=="O"){
            player="X";
        }
        setTimeout(function() {
            alert(player+" Won.");
            reset();
        }, 100);
        
    }
    else if (draw()) {
        $("#p").show();
        $("#p").text('Draw');
    }

    // Change Player
    else {
        if(player == 'X') {
            player = 'O';
        }
        else {
            player = 'X';
        }
    }

    
// code for win or draw

function win () {
    for (let i = 0; i<3; i++ ){
        if((board.rows[i].cells[0].textContent == player) && (board.rows[i].cells[1].textContent == player) && (board.rows[i].cells[2].textContent == player) ) 
            return true;
    }

    for (var i = 0; i<3; i++ ){
        if((board.rows[0].cells[i].textContent == player) && (board.rows[1].cells[i].textContent == player) && (board.rows[2].cells[i].textContent == player) ) 
            return true;
    }

    if((board.rows[0].cells[0].textContent == player) && (board.rows[1].cells[1].textContent == player) && (board.rows[2].cells[2].textContent == player) ) 
       return true;

    if((board.rows[0].cells[2].textContent == player) && (board.rows[1].cells[1].textContent == player) && (board.rows[2].cells[0].textContent == player) ) 
       return true;
}

function draw() {
    if((board.rows[0].cells[0].textContent != "") && (board.rows[0].cells[1].textContent != "") && (board.rows[0].cells[2].textContent != "") &&
    (board.rows[1].cells[0].textContent != "") && (board.rows[1].cells[1].textContent != "") && (board.rows[1].cells[2].textContent != "") &&
    (board.rows[2].cells[0].textContent != "") && (board.rows[2].cells[1].textContent != "") && (board.rows[2].cells[2].textContent != "")) 
         return true;
}


// function reset() {
//     for (var i = 0; i<3; i++ ){
//         board.rows[0].cells[i].textContent = "";
//         board.rows[1].cells[i].textContent = "";
//         board.rows[2].cells[i].textContent = "";
//     }
//     $("#p").hide();
// }

//reset

function reset() {
    for (var i = 0; i<3; i++ ){
        board.rows[0].cells[i].textContent = "";
        board.rows[1].cells[i].textContent = "";
        board.rows[2].cells[i].textContent = "";
    }
    $("#p").hide();
}

$("#reset").click(function() {
        for (var i = 0; i<3; i++ ){
            board.rows[0].cells[i].textContent = "";
            board.rows[1].cells[i].textContent = "";
            board.rows[2].cells[i].textContent = "";
        }
        $("#p").hide();
});


});
