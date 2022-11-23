var haromszog = document.getElementById("pascal");

var határ = 10;

for (var s = 0; s <= határ; s++) {
    var new_sor = document.createElement("div");
    new_sor.classList.add("sor");

    haromszog.appendChild(new_sor);

        for (var o = 0; o <= s; o++) {
            var new_oszlop = document.createElement("div");
            new_oszlop.innerHTML = "*";
            new_oszlop.classList.add("oszlop");

            new_sor.appendChild(new_oszlop);
        }
}

