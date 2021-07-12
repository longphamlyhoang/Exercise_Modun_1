function cong() {
    let so1 = document.getElementById("number1");
    let so2 = document.getElementById("number2");
    let dienso1 = parseFloat(so1.value);
    let dienso2 = parseFloat(so2.value);
    let tong2so = dienso1 + dienso2;
    document.getElementById('ketqua').innerHTML = ` Result Add:  ${tong2so}`
}
function hieu() {
    let so1 = document.getElementById("number1");
    let so2 = document.getElementById("number2");
    let dienso1 = parseFloat(so1.value);
    let dienso2 = parseFloat(so2.value);
    let hieu2so = dienso1 - dienso2;
    document.getElementById('ketqua').innerHTML = ` Result Sub:  ${hieu2so}`
}
function chia() {
    let so1 = document.getElementById("number1");
    let so2 = document.getElementById("number2");
    let dienso1 = parseFloat(so1.value);
    let dienso2 = parseFloat(so2.value);
    let thuong2so = dienso1 / dienso2;
    document.getElementById('ketqua').innerHTML = ` Result Div:  ${thuong2so}`
}
function nhan() {
    let so1 = document.getElementById("number1");
    let so2 = document.getElementById("number2");
    let dienso1 = parseFloat(so1.value);
    let dienso2 = parseFloat(so2.value);
    let tich2so = dienso1 * dienso2;
    document.getElementById('ketqua').innerHTML = `Result Mil: ${tich2so}`
}