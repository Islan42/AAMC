const qtdImagens = 31;
const gradeContainer = document.getElementById("grade-galeria");
const esteiraModal = document.getElementById("esteira-modal");
const modal = document.getElementById("modal-carrossel");

// Controles do Carrossel
let indiceAtual = 0;

if (gradeContainer && esteiraModal && modal) {
    // 1. Limpa resíduos anteriores
    gradeContainer.innerHTML = '';
    esteiraModal.innerHTML = '';
    
    // 2. Loop para construir a Grade E a Esteira do Carrossel ao mesmo tempo
    for (let i = 1; i <= qtdImagens; i++) {    
        // Criando o card da grade visual
        const card = document.createElement('div');
        card.className = "overflow-hidden rounded shadow-md bg-white p-2 hover:scale-105 transition-transform duration-200 cursor-pointer";
        card.innerHTML = `
            <img src="galeria/img(${i}).jpeg" alt="Foto nº ${i}" class="w-full aspect-video object-cover rounded">
        `;
        
        // Evento de clique na imagem da grade: Abre o modal na posição correta
        card.addEventListener('click', () => {
            // Guardamos a posição (i - 1 porque arrays começam em 0)
            indiceAtual = i - 1; 
            atualizarCarrossel();
            modal.classList.remove('hidden'); // Mostra o modal escurecendo o fundo
        });
        
        gradeContainer.appendChild(card);    

        // Criando o slide correspondente dentro do Carrossel do Modal
        const slide = document.createElement('div');
        slide.className = "w-full h-full flex-shrink-0 relative bg-black";
        slide.innerHTML = `
            <img src="galeria/img(${i}).jpeg" alt="Foto nº ${i}" class="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-40">
            <img src="galeria/img(${i}).jpeg" alt="Foto nº ${i}" class="absolute inset-0 w-full h-full object-contain z-10">
        `;
        esteiraModal.appendChild(slide);
    }

    // 3. Função para mover a esteira do carrossel baseado no índice atual
    function atualizarCarrossel() {
        const deslocamento = indiceAtual * -100;
        esteiraModal.style.transform = `translateX(${deslocamento}%)`;
    }

    // 4. Lógica dos botões de navegação do modal
    document.getElementById('modal-proximo').addEventListener('click', () => {
        if (indiceAtual < qtdImagens - 1) {
            indiceAtual++;
        } else {
            indiceAtual = 0; // Volta para a primeira se chegar ao fim
        }
        atualizarCarrossel();
    });

    document.getElementById('modal-anterior').addEventListener('click', () => {
        if (indiceAtual > 0) {
            indiceAtual--;
        } else {
            indiceAtual = qtdImagens - 1; // Vai para a última se voltar da primeira
        }
        atualizarCarrossel();
    });

    // 5. Fechar o modal
    document.getElementById('fechar-modal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // BÔNUS: Fechar se o usuário clicar no fundo escuro (fora do carrossel)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}