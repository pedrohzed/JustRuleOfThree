// Get the button and input elements
const btnCalcular = document.getElementById('btnCalcular');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const valorC = document.getElementById('valorC');
const resultadoX = document.getElementById('resultadoX');

// Add click event listener to the button
btnCalcular.addEventListener('click', function() {
    const a = parseFloat(valorA.value);
    const b = parseFloat(valorB.value);
    const c = parseFloat(valorC.value);
    
    // Validate inputs
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0) {
        resultadoX.textContent = 'Erro';
        return;
    }
    
    // Calculate using rule of three: A/B = C/X
    // Therefore: X = (B * C) / A
    const x = (b * c) / a;
    
    // Display result with 2 decimal places
    resultadoX.textContent = x.toFixed(2);
});

// Optional: Allow calculation on Enter key press
valorC.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btnCalcular.click();
    }
});