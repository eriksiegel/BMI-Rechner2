function BMIberechnen() {

    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;

    if (heightunits == "inches") height /= 0.393700787;
    if (weightunits == "lb") weight /= 2.20462;

    var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

    if (BMI <= 16) {
        document.getElementById("output").style.color = "#e96868";
    }
    if (BMI > 16 && BMI <= 18.49) {
        document.getElementById("output").style.color = "#68b5e9";
    }
    if (BMI >= 18.5 && BMI <= 24.99) {
        document.getElementById("output").style.color = "#77e968";
    }
    if (BMI >= 25 && BMI <= 29.99) {
        document.getElementById("output").style.color = "#e0e968";
    }
    if (BMI >= 30 && BMI <= 39.99) {
        document.getElementById("output").style.color = "#e9b868";
    }
    if (BMI >= 40) {
        document.getElementById("output").style.color = "#e96868";
    }

    var output = Math.round(BMI * 100) / 100;
    if (output < 16)
        document.getElementById("comment").innerText = "Du leidest an extremen Untergewicht. Such dir ärztlichen Rat und kläre die Ursachen ab.";
    else if (output >= 16 && output <= 16.99)
        document.getElementById("comment").innerText = "Du hast ausgeprägtes Untergewicht.";
    else if (output >= 17 && output <= 18.49)
        document.getElementById("comment").innerText = "Du hast leichtes Untergewicht. Lass dich von Oma anfüttern.";
    else if (output >= 18.5 && output <= 24.99)
        document.getElementById("comment").innerText = "Super, du hast Normalgewicht!";
    else if (output >= 25 && output <= 29.99)
        document.getElementById("comment").innerText = "Du hast Prä-Adipositas! Verzichte in der Zukunft auf Süßigkeiten.";
    else if (output >= 30 && output <= 34.99)
        document.getElementById("comment").innerText = "Du hast Adipositas, Klasse 1. Achte zukünftig auf deine Ernährung!";
    else if (output >= 35 && output <= 39.99)
        document.getElementById("comment").innerText = "Du hast Adipositas, Klasse 2. Treibe in der Zukunft mehr Sport.";
    else if (output > 40)
        document.getElementById("comment").innerText = "Du hast Adipositas, Klasse 3. Du solltest schnellstmöglich abnehmen.";
}














