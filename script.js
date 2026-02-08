// Espera o botão ser clicado
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    // Pega os valores dentro da função para estarem atualizados
    const a = parseFloat(document.getElementById('valorA').value);
    const b = parseFloat(document.getElementById('valorB').value);
    const c = parseFloat(document.getElementById('valorC').value);
    const resContainer = document.getElementById('resultadoX');

    // Validação
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha os campos A, B e C");
        return;
    }

    // Regra de três: X = (B * C) / A
    if (a === 0) {
        resContainer.innerText = "Erro";
        resContainer.style.color = "red";
    } else {
        const x = (b * c) / a;
        // Mostra o resultado formatado
        resContainer.innerText = x.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
        resContainer.style.color = "#004e92";
    }
});