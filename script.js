/*
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
*/
let step = 1;
let nGrandezas = 0;

const mainTitle = document.getElementById('main-title');
const subTitle = document.getElementById('sub-title');
const content = document.getElementById('dynamic-content');
const btn = document.getElementById('next-btn');

btn.addEventListener('click', () => {
    if (step === 1) {
        const input = document.getElementById('qty-input');
        nGrandezas = parseInt(input.value);

        if (nGrandezas >= 2 && nGrandezas <= 6) {
            setupInputs();
        } else {
            alert("Please enter a value between 2 and 6 for better visualization.");
        }
    } else if (step === 2) {
        calculate();
    }
});

function setupInputs() {
    step = 2;
    mainTitle.style.opacity = '0';
    setTimeout(() => {
        mainTitle.innerText = "Values";
        subTitle.innerText = "Fill columns to find X";
        mainTitle.style.opacity = '1';
    }, 200);
    
    let html = '<div class="horizontal-grid">';
    for (let i = 1; i <= nGrandezas; i++) {
        const isLast = (i === nGrandezas);
        html += `
            <div class="column" style="animation-delay: ${i * 0.1}s">
                <div class="box">
                    <label>Value ${i}.A</label>
                    <input type="number" class="v1" placeholder="0" step="any">
                </div>
                <div class="box">
                    <label>${isLast ? 'Result' : `Value ${i}.B`}</label>
                    ${isLast ? '<div class="result-box" id="resX">?</div>' : '<input type="number" class="v2" placeholder="0" step="any">'}
                </div>
            </div>
        `;
    }
    html += '</div>';
    content.innerHTML = html;
    btn.innerText = "Calculate";
}

function calculate() {
    const v1Inputs = document.querySelectorAll('.v1');
    const v2Inputs = document.querySelectorAll('.v2');
    const resDisplay = document.getElementById('resX');

    let prod1 = 1, prod2 = 1;

    for (let i = 0; i < nGrandezas - 1; i++) {
        const val1 = parseFloat(v1Inputs[i].value) || 0;
        const val2 = parseFloat(v2Inputs[i].value) || 0;
        
        if (val1 === 0) { alert("Values cannot be zero"); return; }
        
        prod1 *= val1;
        prod2 *= val2;
    }

    const lastV1 = parseFloat(v1Inputs[nGrandezas - 1].value) || 0;
    const finalResult = (lastV1 * prod2) / prod1;

    resDisplay.innerText = finalResult % 1 === 0 ? finalResult : finalResult.toFixed(2);
    resDisplay.style.background = "#fff";
    resDisplay.style.color = "#004e92";
    
    btn.innerText = "Try Again";
    btn.onclick = () => location.reload();
}