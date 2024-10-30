 import {getCSS} from"./combo.js"
 import { tickConfig} from "./common.js"
 async function quantidadeUsuarios() {
    const urt  =  'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res  = await fetch (urt)
    const dados = await res.json ()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

        const data = [
            {
                x: nomeDasRedes,
                y: quantidadeUsuarios,
                type: 'bar',
                marker: {
                    color: getCSS('--bg-color')
                }
            }
        ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').
    appendChild(grafico)
    plotly.newPlot(grafico,data,layout)
}
const layout = {
    plout_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bgcolor'),
    title: {
        Text: 'Rede Sociais com mais usuario no mundo',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title:{
            Text: ' nome das redes sociais',
            font:{
                color: getCSS('--secundary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            Text: 'bilhões de usuarios  ativos',
            font:{
                color: getCSS('--secundary-color')
            }
        }
    }
}

quantidadeUsuarios()