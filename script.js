let comida = '';
let bebida = '';
let sobremesa = '';

function finalizaPedido() {
    window.open("https://wa.me/+5532999765201?text=");
}

function verificaSelecao() {
    if (comida !== '') {
        if (bebida !== '') {
            if (sobremesa !== '') {
                const botaoContinuar = document.querySelector('.buttom');
                console.log(botaoContinuar);
                botaoContinuar.classList.add('avancar');
            }
        }
    }
}

function selecionaComida(item) {
    comida = document.querySelector('.frango h4').textContent;
    console.log(comida);

    let itemSelecionado = document.querySelector('.comidas .selecionado');

    if(itemSelecionado !== null) {
        itemSelecionado.classList.remove('selecionado');
    }

    item.classList.add('selecionado');

    verificaSelecao()
}

function selecionaBebida(item) {
    bebida = document.querySelector('.frango h4').textContent;
    console.log(bebida);

    let itemSelecionado = document.querySelector('.bebidas .selecionado');
    
    if(itemSelecionado !== null) {
        itemSelecionado.classList.remove('selecionado');
    }

    item.classList.add('selecionado');

    verificaSelecao()
}

function selecionaSobremesa(item) {
    sobremesa = document.querySelector('.frango h4').textContent;
    console.log(sobremesa);

    let itemSelecionado = document.querySelector('.sobremesas .selecionado');
    
    if(itemSelecionado !== null) {
        itemSelecionado.classList.remove('selecionado');
    }

    item.classList.add('selecionado');

    verificaSelecao()
}