const toGuessEl = document.querySelector(".to_guess");
const resultEl = document.querySelector(".result");
// console.log(toGuessEl);

const numRand = [];

for (let i = 0; i < 5; i++) {
    const numToGuessEl = document.createElement("div");
    numToGuessEl.classList.add("num_to_guess");

    numRand.push(generateRandom(1, 100));
    numToGuessEl.innerText = numRand[i];
    // console.log(numRand[i]);
    // console.log(numToGuessEl);

    toGuessEl.insertAdjacentElement("beforeend", numToGuessEl);
}
// console.log(numRand);

const numList = [];
const numGuessed = [];
const interval = 3;
setTimeout(function () {
    toGuessEl.classList.add("d-none");

    setTimeout(function () {
        askNumbers();

        for (let i = 0; i < 5; i++) {
            if (numRand.includes(numList[i])) {
                const index = numRand.indexOf(numList[i]);
                numRand.splice(index, 1);
                numGuessed.push(numList[i]);
            }
        }
        // console.log(numGuessed);

        toGuessEl.classList.remove("d-none");
        resultEl.classList.remove("d-none");

        resultEl.innerHTML = `Hai indovinato ${numGuessed.length} numeri`;

        if (numGuessed.length !== 0) {
            resultEl.innerHTML += ": ";
            let j = 0;
            while (j < numGuessed.length) {
                resultEl.innerHTML += numGuessed[j] + " ";
                j++;
            }
        }

    }, 1000);

}, interval * 1000);

function generateRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

function askNumbers() {
    for (let i = 0; i < 5; i++) {
        const num = Number(prompt("Inserisci numero"));
        numList.push(num);
    }
    // console.log(numList);
}