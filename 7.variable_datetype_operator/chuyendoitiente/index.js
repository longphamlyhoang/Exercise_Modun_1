function convertMoney() {
    var money = parseInt(document.getElementById("moneyInput").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var convert;
    if (from == to) {
        convert = money * 1 * 1;
    } else if (from == "vnd" && to == "usd") {
        convert = money * 1 / 23000;
    } else if (from == "vnd" && to == "yen") {
        convert = money * 1 / 200;
    } else if (from == "yen" && to == "vnd") {
        convert = (money * 1) * 200;
    } else if (from == "yen" && to == "usd") {
        convert = money * 1 * 23;
    } else if (from == "usd" && to == "vnd") {
        convert = money * 1 * 23000;
    } else if (from == "yen" && to == "vnd") {
        convert = money * 1 / 200;
    } else if (from == "yen" && to == "usd") {
        convert = money * 1 / 23;
    } else if (from == "usd" && to == "yen") {
        convert = money * 1 * 100;
    }
    console.log(convert);
    document.getElementById("result").innerHTML = "money after convert: " + convert + " " + to;
}