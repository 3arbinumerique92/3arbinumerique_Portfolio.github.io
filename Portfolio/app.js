
const textElement = document.getElementById('intro');
const text = "Chaque pixel compte, donc profitez en un maximum.";
let index = 0;

function writeText() {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(writeText, 70); 
    }
}

writeText();