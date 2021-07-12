function changeColor(){
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let color = 'RGB(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('backgroundchange').style.background = color;
    document.getElementById('colorOutput').innerHTML = color;
    document.getElementById('valueOne').innerHTML = red;
    document.getElementById('valueTwo').innerHTML = green;
    document.getElementById('valueThree').innerHTML = blue;

}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);