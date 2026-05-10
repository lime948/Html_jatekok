const gomb = document.getElementById("roll");
const kocka1 = document.getElementById("kocka1");
const kocka2 = document.getElementById("kocka2");
const nyertes = document.getElementById("nyertes");

gomb.addEventListener("click", function () {

    let szam1 = Math.floor(Math.random() * 6) + 1;
    let szam2 = Math.floor(Math.random() * 6) + 1;

    kocka1.src = "d" + szam1 + ".PNG";
    kocka2.src = "d" + szam2 + ".PNG";

    if (szam1 > szam2) {
        nyertes.innerHTML = "Játékos 1 nyert!";
    }
    else if (szam2 > szam1) {
        nyertes.innerHTML = "Játékos 2 nyert!";
    }
    else {
        nyertes.innerHTML = "Döntetlen!";
    }

});