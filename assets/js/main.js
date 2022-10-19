const toGuessEl = document.querySelector(".to_guess");
console.log(toGuessEl);

for (let i = 0; i < 5; i++) {
    const numToGuessEl = document.createElement("div");
    numToGuessEl.classList.add("num_to_guess");

    const num = generateRandom(1, 100);
    numToGuessEl.innerText = num;
    console.log(num);
    console.log(numToGuessEl);

    toGuessEl.insertAdjacentElement("beforeend", numToGuessEl);
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}