// Write your code here!
const main = document.querySelector('main#main')
main.remove();

const newHeader = document.createElement("h1");
newHeader.innerText="H1";

newHeader.id = "victory";

newHeader.innerHTML = "BENARD, is the champion";