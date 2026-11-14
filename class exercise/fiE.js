"Use strict"
console.log("Hello world");
let teksti = document.querySelector("#result")
teksti.textContent = "Hei maailma"

let nimi = prompt("Anna nimesi: ")
console.log(nimi)

document.getElementById("calc").addEventListener("click", () => {
let hintaInput = document.querySelector("#price")
let hinta = parseInt(hintaInput.value)
let maaraInput = document.querySelector("#qty")
let maara ; parseInt(maaraInput.value)
let koodiInput = document.querySelector("#promo")
let koodi = koodiInput.value


let kokonaishinta = maara * hinta

let teksti = document.querySelector("#result")
teksti.textcontent = `Hinta: ${kokonaishinta}`;
})
