window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}


//Alt under her omhandler diagrammet ...

        const values = [2.453000, 2.793000, 3.283000, 4.319000, 4.699000];

        const output = document.querySelector("#mus");

        document.querySelectorAll(".bars line").forEach((bar, i) => {
            bar.setAttribute("y1", 200 - values[i] * 40); // ganges med 40 får at få det til at passe med 200
            bar.setAttribute("data-value", values[i]);
            bar.addEventListener("mouseover", e => vis(e)); //vis data i output ved mouseover
            bar.addEventListener("mouseout", skjul); //skjul data ved mouseout
        });

        function vis(e) {
            console.log(e.target);
            document.querySelector("#mus").textContent = e.target.dataset.value + " mio."; // her bestemmer du selv, hvad der skal vises
            output.style.display = "block";
            window.addEventListener("mousemove", followMouse);
        }

        //denne funktion får output-elementet til at følge musemarkøren
        function followMouse(e) {
            output.style.top = (e.clientY - 50) + 'px';
            output.style.left = (e.clientX) + 'px';
        }

        //denne funktion skjuler output-elementet og jerner eventlistener'en fra window
        function skjul() {
            output.style.display = "none";
            window.removeEventListener("mousemove", followMouse);
        }
