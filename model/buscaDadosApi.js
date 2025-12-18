async function fetchRecitas() {
    try {
        let receitas = await fetch("https://api-receitas-pi.vercel.app/receitas/todas")
        let dadosReceitas = await receitas.json()
        console.log(dadosReceitas);
    } catch (error) {
        console.error(error)
    }
}

fetchRecitas()

modulo.export = dadosReceitas;
