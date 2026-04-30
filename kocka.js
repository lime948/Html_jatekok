let kocka1 = document.getElementById("kocka1")
let kocka2 = document.getElementById("kocka2")
let forgatas = document.getElementById("roll")
let nyertes = document.getElementById("nyertes")

function Randomszam(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

forgatas.onclick = function() {
    let jatekos1 = Randomszam(1, 7);
    let jatekos2 = Randomszam(1, 7);
    document.querySelector("#kocka1 .text").textContent = jatekos1
    document.querySelector("#kocka2 .text").textContent = jatekos2
    if (jatekos1 > jatekos2) {
        document.querySelector("#nyertes .text").textContent = "A"
    } else if (jatekos2 > jatekos1) {
        document.querySelector("#nyertes .text").textContent = "B"
    } else {
        document.querySelector("#nyertes .text").textContent = "C"
    }
}