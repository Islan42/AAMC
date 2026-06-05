const qtdImagens = 31
const container = document.getElementById("grade-galeria")

if (container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild)
	}
	
	for (let i = 1; i <= qtdImagens; i++) {	
		const card = document.createElement('div')
		card.className = "overflow-hidden rounded shadow-md bg-white p-2 hover:scale-105 transition-transform duration-200";
			
		card.innerHTML = `
			<img src="galeria/img(${i}).jpeg" alt="Foto nº ${i}" class="w-full aspect-video object-cover rounded">
		`;
		
		// Coloca o card dentro da grade
		container.appendChild(card);	
	}
}