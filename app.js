function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //verificar se o numero "de" é maior ou igual ao "até"
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    //verificar se a quantidade é maior que o cálculo (até - de + 1) igual ou menor não dá erro
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número"');
        return;
    }

    let sorteados = [];
    let numero;

    //array - loop para sortear numeros aleatorios
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroALeatorio(de, ate);

        //outro loop para sortear sem repetições
        while (sorteados.includes(numero)) {
            numero = obterNumeroALeatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        //o push empurra o elemento para o array, nesse caso, mostra os numeros sorteados
        sorteados.push(numero);
    }

    //pegar o elemento resultado e exibir na no campo "numeros sorteados"
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusDoBotao();

}

function obterNumeroALeatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//depois do sorteio o algoritmo chama a funçao que troca o status do botao, o botao reiniciar passa a ficar habilitado
function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotao();
}