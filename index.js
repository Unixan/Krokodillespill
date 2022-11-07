// Model
let numberL = 0;
let numberR = 0;
let points = 0;

// View
function view() {
    document.getElementById("app").innerHTML = /*HTML*/ `
     <h1>Krokodillespillet!</h1>
     <div class="buttonBox">
         <div class="button" style="margin-right: 20px; background-color: white; color: black">${numberL}</div>
         <div onclick="crocLeft()" class="button">></div>
         <div onclick="crocEquals()" class="button">=</div>
         <div onclick="crocRight()" class="button"><</div>
         <div class="button" style="margin-left: 20px; background-color: white; color: black">${numberR}</div>
     </div>
     <div class="points">
     ${points} points
     </div>
     `}

// Controller
function generateNumbers() {
    numberL = Math.floor(Math.random() * 9);
    numberR = Math.floor(Math.random() * 9);
    view();
}
function crocLeft() {
    if (numberL > numberR) {
        points++;
        generateNumbers();
    }
    else{ points--; generateNumbers() };
    view()
}
function crocEquals() {
    if (numberL == numberR) {
        points++;
        generateNumbers();
    }
    else{ points--; generateNumbers() };
    view()
}
function crocRight() {
    if (numberL < numberR) {
        points++;
        generateNumbers();
    }
    else{ points--; generateNumbers() };
    view()
}