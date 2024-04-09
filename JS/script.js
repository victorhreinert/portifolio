// Função para alternar a abertura e o fechamento do menu
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open'); // Alterna a classe 'open' no menu
    icon.classList.toggle('open'); // Alterna a classe 'open' no ícone do menu
}

// Função para criar um atraso com base no tempo especificado em milissegundos
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Frase inicial exibida no título
const frase = ['Olá, Sou Victor'];

// Frases que serão escritas dinamicamente no texto
const frasesObjetivos = [
    'Um desenvolvedor.',
    'No início da jornada',
    'Buscando oportunidades',
    'Apaixonado por inovações',
    'Objetivo: impactar com a tech'
];

// Intervalo de espera entre a digitação de cada caractere
let intervaloEspera = 400;

// Índice da palavra atual que está sendo escrita
let indicePalavraAtual = 0;

// Elementos do DOM
const elementoTitulo = document.getElementById("typewriter-titulo");
const cursorTitulo = document.getElementById("cursor-titulo");
const cursorTexto = document.getElementById("cursor-texto");

// Função para escrever a frase inicial no título com efeito de digitação
const escreverFraseTitulo = async () => {
    let palavraAtual = frase[indicePalavraAtual];

    for (let i = 0; i < palavraAtual.length; i++) {
        elementoTitulo.innerText = palavraAtual.substring(0, i + 1);
        await sleep(intervaloEspera);
    }

    // Parar a animação do cursor após a escrita da frase
    cursorTitulo.style.display = "none";
};

// Chamada da função para escrever a frase inicial
escreverFraseTitulo();

// Elemento de texto onde as frases dinâmicas serão exibidas
const elementoTexto = document.getElementById("typewriter-texto");

// Intervalo de espera entre a digitação e apagamento de cada caractere
intervaloEspera = 80;
indicePalavraAtual = 0;
cursorTexto.style.display = "none";

// Função para escrever as frases dinâmicas com efeito de digitação e apagamento
const escreverFrases = async () => {
    while (true) {
        let palavraAtual = frasesObjetivos[indicePalavraAtual];

        for (let i = 0; i < palavraAtual.length; i++) {
            elementoTexto.innerText = palavraAtual.substring(0, i + 1);
            await sleep(intervaloEspera);
        }
        
        await sleep(1000);

        for (let i = palavraAtual.length; i > 0; i--) {
            elementoTexto.innerText = palavraAtual.substring(0, i - 1);
            await sleep(50);
        }
        await sleep(800);
        if (indicePalavraAtual == frasesObjetivos.length - 1) {
            indicePalavraAtual = 0;
        } else {
            indicePalavraAtual++;
        }
    }
};

// Função principal que inicia após um atraso de 3 segundos
const iniciar = async () => {
    await sleep(3000); // Aguarda 3 segundos
    cursorTexto.style.display = "inline"; // Exibe o cursor novamente
    escreverFrases(); // Inicia a função escreverFrases após o atraso
};

iniciar(); // Chama a função iniciar para iniciar o processo


// Cards Dinamicos - Sessão Projetos


const projectData = [
    {
        imgSrc: "./assets/projeto 1.png",
        title: "Clone Spotify",
        description: "Imersão Front-End de um projeto do Spotify",
        githubLink: "https://github.com/victorhreinert/Imersao_Alura?tab=readme-ov-file",
        liveDemoLink: "https://victorhreinert.github.io/Imersao_Alura/"
    },
    {
        imgSrc: "./assets/projeto 2.png",
        title: "Site Boostrap",
        description: "Projeto bootstrap de um site para um museu de doces.",
        githubLink: "https://github.com/victorhreinert/bootstrap-candy-museum",
        liveDemoLink: "https://victorhreinert.github.io/bootstrap-candy-museum/"
    },
    {
        imgSrc: "./assets/projeto 3.png",
        title: "Jogo em Javascript",
        description: "Projeto de um jogo online de Tênis de mesa",
        githubLink: "https://github.com/victorhreinert/Ping-Pong-Score-Keeper?tab=readme-ov-file",
        liveDemoLink: "https://victorhreinert.github.io/Ping-Pong-Score-Keeper/"
    }
];

const projectContainer = document.querySelector(".card-container");

const renderProjects = () => {
    projectData.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${project.imgSrc}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubLink}'">Github</button>
                <button class="btn btn-color-2 project-btn" onclick="location.href='${project.liveDemoLink}'">Live Demo</button>
            </div>
        `;
        projectContainer.appendChild(card);
    });
};

renderProjects();





// Tags Dinamicos - Sessão Experiencia

        // Adiciona um evento de clique para cada link de tab
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(event) {
              // Previne o comportamento padrão do link
              event.preventDefault();
              
              // Remove a classe 'active' de todas as tabs
              document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
              });
              
              // Adiciona a classe 'active' apenas à tab clicada
              this.classList.add('active');
              
              // Oculta todos os conteúdos das tabs
              document.querySelectorAll('.tab-pane').forEach(tabContent => {
                tabContent.classList.remove('show', 'active');
              });
              
              // Obtém o ID do conteúdo da tab correspondente
              const targetId = this.getAttribute('href');
              
              // Exibe o conteúdo da tab correspondente
              document.querySelector(targetId).classList.add('show', 'active');
            });
          });