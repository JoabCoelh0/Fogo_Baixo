
async function fetchRecitas() {

    try {
        const main = document.querySelector('#main')
        
        let receitas = await fetch("https://api-receitas-pi.vercel.app/receitas/todas?page=1&limit=100")

        let dadosReceitas = await receitas.json()
        console.log(dadosReceitas.items);   

        for(let receita of dadosReceitas.items){

            const card = document.createElement('div')
            card.classList.add('card')
            main.appendChild(card)
    
            const divImg = document.createElement('div')
            divImg.classList.add('img')
            divImg.innerHTML = `<img src="${receita.link_imagem}" alt="Imagem da receita.">`
            card.appendChild(divImg)
    
            const informacoes = document.createElement('div')
            informacoes.classList.add('informacoes')
            card.appendChild(informacoes)
    
    
            const dadosReceita = document.createElement('div')
            dadosReceita.classList.add('dados_receita')
            informacoes.appendChild(dadosReceita)
    
            const nomeReceita = document.createElement('div')
            nomeReceita.classList.add('nome_receita')
            dadosReceita.appendChild(nomeReceita)
    
            const h2Nome = document.createElement('h2')
            h2Nome.classList.add('nome')
            h2Nome.textContent = `${receita.receita}`
            nomeReceita.appendChild(h2Nome)
    
            const quantidadeIngre = document.createElement('div')
            quantidadeIngre.classList.add('quantidade')
            dadosReceita.appendChild(quantidadeIngre)
    
            const h3QuantidadeIngre = document.createElement('h3')
            h3QuantidadeIngre.textContent =`${11} ingredientes`
            quantidadeIngre.appendChild(h3QuantidadeIngre)
    
            const tag = document.createElement('div')
            tag.classList.add('tags')
            dadosReceita.appendChild(tag)
    
            const tagsSpan = document.createElement('span')
            tagsSpan.textContent =`${receita.tipo}`
            tag.appendChild(tagsSpan)
        }



    } catch (error) {
        console.error(error)
    }
}




fetchRecitas()
