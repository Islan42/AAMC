// Captura a esteira e os botões
const esteira = document.getElementById('esteira-carrossel');
const cards = document.querySelectorAll('.slide-card');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

let indiceAtual = 0;
const totalSlides = cards.length;

// Função que calcula o deslocamento horizontal
const atualizarCarrossel = () => {
    // Multiplica o índice atual por 100 para saber a porcentagem do empurrão
    const deslocamento = indiceAtual * 100;
    esteira.style.transform = `translateX(-${deslocamento}%)`;
};

// Evento para avançar
btnProximo.addEventListener('click', () => {
    if (indiceAtual < totalSlides - 1) {
        indiceAtual++; // Avança um slide
    } else {
        indiceAtual = 0; // Volta para o primeiro se estiver no final
    }
    atualizarCarrossel();
});

// Evento para voltar
btnAnterior.addEventListener('click', () => {
    if (indiceAtual > 0) {
        indiceAtual--; // Volta um slide
    } else {
        indiceAtual = totalSlides - 1; // Vai para o último se estiver no início
    }
    atualizarCarrossel();
});