let palavra = palavraSecreta.toLowerCase();
let progresso = Array(palavra.length).fill("_");
let erradas = [];
let tentativas = 6;

const divPalavra = document.getElementById("palavra");
const spanErradas = document.getElementById("erradas");
const forcaDesenho = document.getElementById("forca");
const tecladoDiv = document.getElementById("teclado");

divPalavra.textContent = progresso.join(" ");

// Monta teclado virtual A-Z
function criarTeclado() {
    const letras = "abcdefghijklmnopqrstuvwxyz".split("");
    tecladoDiv.innerHTML = "";
    letras.forEach(letra => {
        let btn = document.createElement("button");
        btn.textContent = letra.toUpperCase();
        btn.classList.add("tecla");
        btn.onclick = () => {
            tentarLetra(letra, btn);
        };
        tecladoDiv.appendChild(btn);
    });
}

criarTeclado();

function tentarLetra(letra, botao) {
    botao.disabled = true; // Desativa botão após clique

    if (palavra.includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                progresso[i] = letra;
            }
        }
    } else {
        if (!erradas.includes(letra)) {
            erradas.push(letra);
            tentativas--;
        }
    }

    atualizarTela();
}

function atualizarTela() {
    divPalavra.textContent = progresso.join(" ");
    spanErradas.textContent = erradas.join(" ");
    desenharForca();

    if (!progresso.includes("_")) {
        setTimeout(() => alert("🎉 Você venceu! A palavra era: " + palavra), 100);
    } else if (tentativas === 0) {
        setTimeout(() => alert("☠️ Você perdeu! A palavra era: " + palavra), 100);
    }
}

function desenharForca() {
    const estagios = [
        `
        
        
        

        
=========
        `,
        `
        |
        |
        |
        |
=========
        `,
        `
    +---+
        |
        |
        |
        |
=========
        `,
        `
    +---+
    |   O
        |
        |
        |
=========
        `,
        `
    +---+
    |   O
    |   |
        |
        |
=========
        `,
        `
    +---+
    |   O
    |  /|\\
        |
        |
=========
        `,
        `
    +---+
    |   O
    |  /|\\
    |  / \\
        |
=========
        `
    ];
    forcaDesenho.textContent = estagios[6 - tentativas];
        }
