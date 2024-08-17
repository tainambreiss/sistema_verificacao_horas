function carregar() {
    let dataAtual = new Date()
    let horaAtual = dataAtual.getHours()
    let mensagem = document.getElementById('mensagem')
    let corFundo = document.getElementById('cor')
    let imagem = document.getElementById('img')
    mensagem.innerText = `Agora são ${horaAtual} horas.`
    
    if(horaAtual >=0 && horaAtual < 12) {
     img.src = "imagens/fotomanha.png"
     document.body.style.backgroundColor = '#e2cd9f'
    } else if(horaAtual >= 12 && horaAtual < 18) {
      img.src = "imagens/fototarde.png"
      document.body.style.backgroundColor = '#b9846f'
    } else {
      img.src = "imagens/fotonoite.png"
      document.body.style.backgroundColor = '#515154'
    }
    }