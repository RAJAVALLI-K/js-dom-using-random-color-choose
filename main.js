
let bodyDiv = document.getElementsByTagName('body')[0];
let button = document.createElement('button');
button.innerText = "Click";
bodyDiv.appendChild(button);

button.addEventListener("click", function () {
    let color = Math.floor(Math.random() * 256);
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + color + "," + color1 + "," + color2 + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
});