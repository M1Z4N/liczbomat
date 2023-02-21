function wynik1() {
    let from = parseInt(document.getElementById("od").value);
    let to = parseInt(document.getElementById("do").value);

    if (from < to) {

        let wypisaneLiczby = "";

        for (let x = from; x <= to; x++) {
            wypisaneLiczby += x + ", ";
        }
        document.getElementById("wypisz1").innerHTML = wypisaneLiczby.slice(0, -2);
    }

    if (to < from) {

        let wypisaneLiczby = "";

        for (let x = from; x >= to; x--) {
            wypisaneLiczby += x + ", ";
        }
        document.getElementById("wypisz1").innerHTML = wypisaneLiczby.slice(0, -2);
    }
}

function wynik2() {
    let from = parseInt(document.getElementById("od").value);
    let to = parseInt(document.getElementById("do").value);
    let dzielnik = parseInt(document.getElementById("podzielne").value);

    if (dzielnik == 0) {
        document.getElementById("wypisz2").innerHTML = "Ktoś tu nie uważał na matematyce w szkole...";
        return;
    } 
    else {
    
    if (isNaN(from) || isNaN(to)) {
        document.getElementById("wypisz2").innerHTML = "Najpierw wypisz przedział! <br> (Wypełnij okienka po lewej stronie)";
        return;
    } 
    else if (from < to) {

    let podzielone;
    let podzielne = "";

    for (let x = from; x <= to; x++) {
        podzielone = x % dzielnik;

        if (podzielone == 0) {
            podzielne += x + ", ";
        }
    }

    document.getElementById("wypisz2").innerText = podzielne.slice(0, -2);
}
else if(from > to) {

    let podzielone;
    let podzielne = "";

    for (let x = from; x >= to; x--) {
        podzielone = x % dzielnik;

        if (podzielone == 0) {
            podzielne += x + ", ";
        }
    }

    document.getElementById("wypisz2").innerText = podzielne.slice(0, -2);
}
}
}

function funkcja(x) {
    const text = document.getElementById(x).innerHTML;

    if(text == '') {
        alert('Najpierw wypisz interesujące cię liczby.')
    } else {
    navigator.clipboard.writeText(text);
    alert('Gotowe szefie!');
    }
}