console.log("Successfully connected to IFFE scripts");

// function game(){
//     var score = Math.random()*10;
//     console.log(score);
//     console.log(score >=5);
// }

// game();

// Immediately involved function
(function () {
    var score = Math.random() * 10;
    console.log(score, score >= 5);
})();


// function where we pass in 5 so that we always win
(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score, score >= 5 - goodluck);
})(5);