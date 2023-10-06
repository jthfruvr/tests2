// Funktio, joka näyttää valitun välilehden
function nayta_valitut(valinta) {
    $(document).ready(function(){       
        $(".etusivu").hide();
        $(".palvelut").hide();
        $(".varit").hide();
        $(".galleria").hide();
        $(".ytiedot").hide();
        $(valinta).show();
        if (valinta == ".etusivu") {
            $("#otsikko").show();
        } else {
            $("#otsikko").hide();
        }
    });
}

nayta_valitut('.etusivu');

// Funktio, joka vaihtaa värin Värien testaus-osiossa
function vaihda_vari1(varikoodi, varinimi) {
    document.getElementById("vari1").innerHTML = varinimi;
    document.getElementById("seina1").setAttribute("style", "background-color: " + varikoodi + ";");
}

function vaihda_vari2(varikoodi, varinimi) {
    document.getElementById("vari2").innerHTML = varinimi;
    document.getElementById("seina2").setAttribute("style", "background-color: " + varikoodi + ";");
}

// Listaus kuvista, jotka näytetään sivulla
let kuvien_tiedot = ["suuri", "default", '"images/kuva1.jpg"', '"Tapetti1"', 'images/kuva1.jpg',
                    "suuri", "default", '"images/kuva2.jpg"', '"Tapetti2"', 'images/kuva2.jpg',
                    "suuri", "default", '"images/kuva3.jpg"', '"Tapetti3"', 'images/kuva3.jpg',
                    "suuri", "default", '"images/kuva4.jpg"', '"Tapetti4"', 'images/kuva4.jpg',
                    "suuri", "default", '"images/kuva5.jpg"', '"Tapetti5"', 'images/kuva5.jpg',
                    "suuri", "default", '"images/kuva6.jpg"', '"Tapetti6"', 'images/kuva6.jpg',
                    "suuri", "default", '"images/kuva7.jpg"', '"Maalausta"', 'images/kuva7.jpg',
                    "suuri", "default", '"images/kuva8.jpg"', '"Tapetti7"', 'images/kuva8.jpg',
                    "suuri", "default", '"images/kuva9.jpg"', '"Tapetti8"', 'images/kuva9.jpg'];
let kuvat_lkm = 9;

// For-silmukka, joka käy läpi jokaisen kuvan tiedot ja lisää ne kuva-alueelle
for (i = 0; i < kuvat_lkm; i++) {
    document.getElementById("sisalto_galleria").innerHTML += "<div class='container p-2 m-2 border "
    + "kehys " + kuvien_tiedot[i * 5] + " " + kuvien_tiedot[i * 5 + 1] + "'"
    + "onclick='isonna_kuva(" + kuvien_tiedot[i * 5 + 2] + ", " + kuvien_tiedot[i * 5 + 3]
    + ")'><img id='kuva" + String(i + 1) + "' src=" + kuvien_tiedot[i * 5 + 4]
    + " alt='kuva' class='_kuvat'></div>";
}

// Luodaan tausta-objekti, jonka päällä näytetään kuvat, kun niitä isonnetaan klikkaamalla
let modal = document.getElementById("iso_kuva");
let modal_kuva = document.getElementById("kuva_");
let caption_teksti = document.getElementById("caption");
function isonna_kuva(kuva_tiedosto, kuva_alt) {
    modal.style.display = "block";
    modal_kuva.src = kuva_tiedosto;
    caption_teksti.innerHTML = kuva_alt;
}
let span = document.getElementsByClassName("sulje")[0]; // Ison kuvan sulkemispainike
span.onclick = function() {
    modal.style.display = "none";
}

// Funktio, joka poistaa valitut värit Värien testaus-osiossa
function poista_varit() {
    document.getElementById("vari1").innerHTML = "";
    document.getElementById("seina1").setAttribute("style", "background-color: " + "#FFFFFF" + ";");
    document.getElementById("vari2").innerHTML = "";
    document.getElementById("seina2").setAttribute("style", "background-color: " + "#FFFFFF" + ";");
}