let nomeJogo = 'Texas';
let qtdeJogadores = '';

function verificaSelecao(){
    // verificar se o jogo foi selecionado
    console.log(nomeJogo);
    console.log(qtdeJogadores);
    if ( nomeJogo !== ''){
        // verificar se a quantidade de jogadores foi selecionada
        if ( qtdeJogadores !== ''){
            // 1 - buscar o elemento botao com a classe botao-continuar
            const botaoContinuar = document.querySelector('.botao-continuar');
            // 2 - adiciona a classe avancar
            botaoContinuar.classList.add('avancar');
        }
    }
}

function perguntarIdade(){    
    
    const anoDigitado = prompt('Ano de Nascimento');
    
    const anoDeNascimento = Number(anoDigitado); 

    const anoAtual = 2023;

    const idade = anoAtual - anoDeNascimento;

    alert(idade);
    
    if ( idade > 17 ) {
        
        // 1 - fazer um link com a div com a classe selecionar-jogo, trazer para js
        const painel = document.querySelector('.selecionar-jogo');   
        
        // 2 - remover a classe escondido da lista de classes da div
        painel.classList.remove('escondido');
        

    }else{ 
        // 1 - fazer um link com o paragrafo que tem a classe aviso, trazer pro JS
        const paragrafo = document.querySelector('.aviso');                
        // 2 - alterar o texto para voce não poder jogar
        paragrafo.innerHTML = `Você tem ${idade} anos! não pode jogar!`;        
    }
}

/*function selecionarJogo(seletor){    

    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.jogo .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');
}*/

function selecionarJogo(botao){    

    nomeJogo = botao.innerHTML;
    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.jogo .selecionado');
    
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');

    verificaSelecao();
}



/*function selecionarQtdeJogadores(seletor){    
    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.qtd-jogadores .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    // adiciona a classe selecionado
    botao.classList.add('selecionado');
}*/

function selecionarQtdeJogadores(botao){    
    
    qtdeJogadores = botao.innerHTML;

    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.qtd-jogadores .selecionado');
    
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');

    verificaSelecao();
}