function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        myNumbers += i;
        if (i < 9) {
            myNumbers += ", ";
        }
        i++;
    } while (i <= 9);
    return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;
