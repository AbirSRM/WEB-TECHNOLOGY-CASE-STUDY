function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    if (height > 3) {
        alert("Height cannot be more than 3 meters! Please enter a valid height.");
        return;
    }
    if (weight > 250) {
        alert("Weight cannot be more than 250 kg! Please enter a valid weight.");
        return;
    }
    
    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmi-result").textContent = bmi;
    } else {
        alert("Please enter valid height and weight!");
    }
}

function clearFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmi-result").textContent = "";
}