
let chave = "4ad57584738eceddfdab189783eb9031"

function colocaNaTela(dadosCidade){
    console.log(dadosCidade)

    document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dadosCidade.name 
    /* entra no HTML -> procura a classe -> insere um novo texto -> frase -> pegar somente o nome da cidade entre todos os dados disponíveis */
    document.querySelector(".temperatura").innerHTML = "Temperatura: " + Math.floor(dadosCidade.main.temp) + "°C"
    /* entra no HTML -> procura a classe -> insere um novo texto -> frase -> Math.floor para arredondar o numero -> entra no main e no temp para pegar somente a temperatura */
    document.querySelector(".caracteristica-tempo").innerHTML = dadosCidade.weather[0].description
    /* entra no HTML -> procura a classe -> insere um novo texto -> entra nos dados -> entra em weather -> vai aparecer um array ou mais de um, mas a descrição que precisamos aparece no array [0] */
    document.querySelector(".umidade").innerHTML = "Umidade: " + dadosCidade.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dadosCidade.weather[0].icon + ".png"
    /* o SRC vai ser sempre o mesmo, só muda o endereço final, portanto colocarmos a URL padrão -> mandamos o icone mudar conforme o icone que aparece no WEATHER */

}


/* ASYNC - essa função vai até um servidor na internet então devemos usar o ASYNC */
/* AWAIT - como iremos acessar um servidor, ele demora a carregar a informação, por isso usar o AWAIT */
/* FETCH - ferramenta que vai até o servidor buscar a informação */

async function buscarCidade(nomeCidade) {
    let dadosCidade = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        nomeCidade +
        "&appid=" +
        chave + /* Para acessar o aplicativo com minha chave */
        "&lang=pt_br" + /* Para sair o resultado em português */
        "&units=metric" /* Para sair a temperatura em Celsius */
    )
        .then(resposta => resposta.json())

    colocaNaTela(dadosCidade)

}

function pesquisar() {
    let nomeCidade = document.querySelector(".pesquisa-do-usuario").value

    buscarCidade(nomeCidade)

}