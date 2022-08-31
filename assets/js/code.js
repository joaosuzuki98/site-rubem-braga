//Códigos para o Hot site Rubem Braga

// Cria um novo objeto da classe Date
const tempo = new Date()

// Concatenação
const txtData = tempo.getFullYear() +  ' - horas: ' + tempo.getHours() + ' minutos: ' + tempo.getMinutes()

// ELEMENTOS DOM
const spanData = document.getElementById('data')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btPhoneFechar = document.getElementById('btPhoneFechar')

// Insere txtData dentro do ID "data"
spanData.innerText = txtData

// AÇÕES DO USUÁRIO (eventos)
// Abre o menu hamburguer
btHamburguer.addEventListener('click', () => {
    navPhone.style.display = 'block'
})

// Fecha o menu hamburguer
btPhoneFechar.addEventListener('click', () => {
    navPhone.style.display = 'none'
})
