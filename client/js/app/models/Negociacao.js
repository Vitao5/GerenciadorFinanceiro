class Negociacao{
    constructor(data,entrega, produto, quantidade, valor){
        this._data = new Date(data.getTime());
        this._entrega = entrega;
        this._produto = produto;
        this._quantidade = quantidade;
        this._valor = valor;
        
    }

    get data(){
        return new Date(this._data.getTime());
    }
    
    get entrega(){
        return this._entrega;
    }
    
    get produto(){
        return this._quantidade;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this.valor; 
    }




}