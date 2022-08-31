const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')

// Ao clicar no id "btFechar"
btFechar.addEventListener('click', () => {
    // Oculta o divModal - CSS display:none por JS
    divModal.style.display = 'none'
}) 
