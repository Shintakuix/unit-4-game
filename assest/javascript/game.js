var compRandom = [Math.floor(Math.random() * 102)+19];
var wins = 0;
var losses = 0;
var ruby = [Math.floor(Math.random() * 12)+1];
var emerald = [Math.floor(Math.random() * 12)+1];
var amethyst = [Math.floor(Math.random() * 12)+1];
var sapphire = [Math.floor(Math.random() * 12)+1];
var accuNumber = ["0"];
var wholeNumber = "";

console.log(compRandom);
console.log(ruby);
console.log(emerald);
console.log(amethyst);
console.log(sapphire);

$("#compRandom").text(compRandom)

$("#ruby").on("click", function () { 

    wholeNumber = parseInt(accuNumber[0]) + parseInt(ruby);

    accuNumber = [];
    accuNumber.push(wholeNumber);
    wholeNumber = "";

    if (accuNumber[0] < compRandom) {
        $("#gamerNumber").text(accuNumber);
        console.log(accuNumber[0]);
        }
    if (accuNumber[0] == compRandom) {
        wins++;
        $("#wins").text(wins);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");

        }
    if (accuNumber[0] > compRandom) {
        losses++;
        $("#losses").text(losses);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
})

$("#emerald").on("click", function () {

    wholeNumber = parseInt(accuNumber[0]) + parseInt(emerald);
    
    accuNumber = [];
    accuNumber.push(wholeNumber);
    wholeNumber = "";

    if (accuNumber[0] < compRandom) {
        $("#gamerNumber").text(accuNumber);
        console.log(accuNumber[0]);
        }
    if (accuNumber[0] == compRandom) {
        wins++;
        $("#wins").text(wins);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
    if (accuNumber[0] > compRandom) {
        losses++;
        $("#losses").text(losses);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
})

$("#amethyst").on("click", function () {

    wholeNumber = parseInt(accuNumber[0]) + parseInt(amethyst);

    accuNumber = [];
    accuNumber.push(wholeNumber);
    wholeNumber = "";

    if (accuNumber[0] < compRandom) {
        $("#gamerNumber").text(accuNumber);
        console.log(accuNumber[0]);
        }
    if (accuNumber[0] == compRandom) {
        wins++;
        $("#wins").text(wins);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
    if (accuNumber[0] > compRandom) {
        losses++;
        $("#losses").text(losses);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
})

$("#sapphire").on("click", function () {

    wholeNumber = parseInt(accuNumber[0]) + parseInt(sapphire);

    accuNumber = [];
    accuNumber.push(wholeNumber);
    wholeNumber = "";

    if (accuNumber[0] < compRandom) {
        $("#gamerNumber").text(accuNumber);
        console.log(accuNumber[0]);
        }
    if (accuNumber[0] == compRandom) {
        wins++;
        $("#wins").text(wins);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
    if (accuNumber[0] > compRandom) {
        losses++;
        $("#losses").text(losses);
        compRandom = [Math.floor(Math.random() * 102)+19];
        $("#compRandom").text(compRandom);B
        accuNumber = ["0"];
        wholeNumber = "";
        ruby = [Math.floor(Math.random() * 12)+1];
        emerald = [Math.floor(Math.random() * 12)+1];
        amethyst = [Math.floor(Math.random() * 12)+1];
        sapphire = [Math.floor(Math.random() * 12)+1];
        $("#gamerNumber").text("");
        }
})



    