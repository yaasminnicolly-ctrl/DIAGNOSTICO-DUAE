function nextStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}

function showLoading(btn) {
    const input = document.getElementById("ans-q1").value.trim();

    if (!input) {
        alert("Preencha sua resposta antes de continuar.");
        return;
    }

    btn.innerText = "ANALISANDO...";
    btn.disabled = true;

    setTimeout(() => {
        generateResult(input);
        nextStep('step-result');
    }, 1500);
}

function generateResult(input) {
    let result;

    if (input.length < 20) {
        result = "AJUSTE SIMPLES";
    } else if (input.length < 60) {
        result = "CORE IDENTITY";
    } else {
        result = "MASTER DIRECTION";
    }

    document.getElementById("result-type").innerText = result;
}

function goToWhatsApp() {
    const result = document.getElementById("result-type").innerText;

    const message = encodeURIComponent(
        Olá! Fiz o diagnóstico da DUAE e meu resultado foi: ${result}. Quero entender os próximos passos.
    );

    const url = https://wa.me/5511983013177?text=${message};
    window.open(url, "_blank");
}
