//Códigos para o Hot site Rubem Braga

// Cria um novo objeto da classe Date
const tempo = new Date()

// Concatenação
const txtData = tempo.getFullYear() +  ' - horas: ' + tempo.getHours() + ' minutos: ' + tempo.getMinutes()

// ELEMENTOS DOM
const spanData = document.getElementById('data')
const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btPhoneFechar = document.getElementById('btPhoneFechar');

// Insere txtData dentro do ID "data"
spanData.innerText = txtData

// AÇÕES DO USUÁRIO (eventos)
// Ao clicar no id "btFechar"
btFechar.addEventListener('click', () => {
    // Oculta o divModal - CSS display:none por JS
    divModal.style.display = 'none'
})

btHamburguer.addEventListener('click', () => {
    navPhone.style.display = 'block'
})

btPhoneFechar.addEventListener('click', () => {
    navPhone.style.display = 'none'
})
