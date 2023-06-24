// Selecionando os elementos da tela de fechado e aberto
const screenClose = document.querySelector(".screenClose")
const screenOpen = document.querySelector(".screenOpen")

// Selecionando o elemento de mensagem e a lista de mensagens
const message = document.querySelector(".message")
const messageList = [
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Muitas das grandes realizações do mundo foram feitas por pessoas cansadas e desanimadas que continuaram trabalhando.",
    "Se você quer um arco-íris, tem que suportar a chuva.",
    "Nunca deixe que o medo de errar impeça você de jogar o jogo.",
    "O melhor profeta do futuro é o passado.",
    "Sua maior virtude é a disposição de aprender.",
    "Uma jornada de mil milhas começa com um único passo.",
    "Você nunca é velho demais para estabelecer outro objetivo ou sonhar um novo sonho.",
    "O fracasso é a oportunidade de começar de novo, desta vez de forma mais inteligente.",
    "Aqueles que não acreditam em mágica nunca a encontrarão."
];


// Selecionando o botão para abrir o biscoito e o botão para abrir outro
const cookieBtn = document.querySelector(".cookieBtn")
const newOne = document.querySelector("#openNewOne")

// Adicionando um event listener para os cliques nos botões
cookieBtn.addEventListener('click', toggleScreen)
newOne.addEventListener('click', toggleScreen)

// Função para alternar entre a tela de biscoito fechado e aberto
function toggleScreen() {
    screenClose.classList.toggle('hide')
    screenOpen.classList.toggle('hide')
    choseMessage()
}

// Função para escolher uma mensagem aleatória da lista
function choseMessage() {
    // Escolhendo um número aleatório entre 0 e o tamanho da lista de mensagens
    let number = Math.floor(Math.random()*messageList.length)
    
    // Alterando o conteúdo da mensagem para a mensagem escolhida
    message.innerHTML = messageList[number]
}
