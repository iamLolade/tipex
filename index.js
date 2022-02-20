document.getElementById("btn").addEventListener("click", correct);
let paragraph = document.getElementById("paragraph");
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    paragraph.innerHTML = form["input-text"].value;
})

function correct() {
    let wordArray = paragraph.textContent.split(" ");
    let result = wordArray.map(word => {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
    }).join(" ");
    return paragraph.textContent = result;
}

