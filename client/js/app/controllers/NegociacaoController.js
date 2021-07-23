class NegociacaoController {

    constructor(){
         let $ = document.querySelector.bind(document);
        
         this._inputData = $ ('#data');
         this._inputEntrega = $ ('#entrega');
         this._inputProduto = $ ('#produto');
         this._inputQuantidade = $ ('#quantidade');
         this._inputValor = $ ('#valor');
    }

    adiciona(event) {
          event.preventDefault();

          let data = new Date(
              ...this._inputData.value
              .split('-').map((item, indice) => item - indice % 2)
              );

          let negociacao =  new Negociacao(
              this._inputData.value,
              this._inputEntrega.value,
              this._inputProduto.value,
              this._inputQuantidade.value,
              this._inputValor.value
          );
        console.log(negociacao);
    }
  }