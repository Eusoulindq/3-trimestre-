async function redesFavoritasMundo(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favotitas,json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}
    
