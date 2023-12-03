function updateDisciplines() {
    var clanSelect = document.getElementById("clan");
    var selectedClan = clanSelect.value;
    var disciplines01Input = document.getElementById("disciplines01");
    var disciplines02Input = document.getElementById("disciplines02");
    var disciplines03Input = document.getElementById("disciplines03");
 
    // Adicione informações ao input com base no valor selecionado
    if (selectedClan === "Brujah") {
        disciplines01Input.value = "Rapidez";
        disciplines02Input.value = "Potencia";
        disciplines03Input.value = "Presença";
        
    } else if (selectedClan === "Gangrel") {
        disciplines01Input.value = "Animalismo";
        disciplines02Input.value = "Fortitude";
        disciplines03Input.value = "Metarmofose";
        
    } else if (selectedClan === "Malkaviano") {
        disciplines01Input.value = "Auspicios";
        disciplines02Input.value = "Demencia";
        disciplines03Input.value = "Ofuscação";
        
    } else if (selectedClan === "Nosferatu") {
        disciplines01Input.value = "Animalismo";
        disciplines02Input.value = "Ofuscação";
        disciplines03Input.value = "Potencia";
        
    } else if (selectedClan === "Toreador") {
        disciplines01Input.value = "Auspicios";
        disciplines02Input.value = "Rapidez";
        disciplines03Input.value = "Presença";
        
    } else if (selectedClan === "Tremere") {
        disciplines01Input.value = "Auspicios";
        disciplines02Input.value = "Dominação";
        disciplines03Input.value = "Taumaturgia";
        
    } else if (selectedClan === "Ventrue") {
        disciplines01Input.value = "Dominação";
        disciplines02Input.value = "Fortitude";
        disciplines03Input.value = "Presença";
        
    }
    // Adicione mais condições conforme necessário para outros clãs
}