import React from 'react';

import Cartao from './cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {
    constructor(props){
        super(props);
        this.state = { cliques: 0, busca: '', dados: [ ], servidor: [ ] };
        this.addClique = this.addClique.bind(this);
        this.atualizarBusca = this.atualizarBusca.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
    }
    addClique(){
        // this.setState({ cliques: this.state.cliques + 1 });
        this.setState(( prevStates )=>({
            cliques: prevStates.cliques + 1
        }));
    }

    atualizarBusca(evento){
        this.setState({ busca: evento.target.value });
        if( evento.target.value == " "){
            this.setState({ dados: this.state.servidor });
        }

    }

    onSubmit(evento){
        let busca  = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter(function(item){
            if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 
            || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1  
            || item.detalhes.toUpperCase().indexOf(busca.toUpperCase()) > -1 ){
                return item;
            }
        });
        this.setState({ dados: novaLista });


        evento.preventDefault();
    }

    componentDidMount(){
        this.setState({ 
            dados: [
                {titulo: 'Titulo 1',descricao: 'Descricao 1', detalhes: 'Detahes 1', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 2',descricao: 'Descricao 2', detalhes: 'Detahes 2', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 3',descricao: 'Descricao 3', detalhes: 'Detahes 3', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 4',descricao: 'Descricao 4', detalhes: 'Detahes 4', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 5',descricao: 'Descricao 5', detalhes: 'Detahes 5', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 6',descricao: 'Descricao 6', detalhes: 'Detahes 6', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 7',descricao: 'Descricao 7', detalhes: 'Detahes 7', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'}
            ],
            servidor: [
                {titulo: 'Titulo 1',descricao: 'Descricao 1', detalhes: 'Detahes 1', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 2',descricao: 'Descricao 2', detalhes: 'Detahes 2', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 3',descricao: 'Descricao 3', detalhes: 'Detahes 3', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 4',descricao: 'Descricao 4', detalhes: 'Detahes 4', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 5',descricao: 'Descricao 5', detalhes: 'Detahes 5', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 6',descricao: 'Descricao 6', detalhes: 'Detahes 6', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'},
                {titulo: 'Titulo 7',descricao: 'Descricao 7', detalhes: 'Detahes 7', imagem: 'https://materializecss.com/images/office.jpg', link: '#teste'}
            ]
        });
    }

    render(){
    let noticias = this.state.dados
    let aux = [ ];
    let novaLista = [ ];
    for(let k = 0; k < noticias.length; k++){
        aux.push(noticias[k]);
        if(aux.length == this.props.qtdLinha ){
            novaLista.push(aux);
            aux = [ ];
        }else if (k == noticias.length - 1){
            novaLista.push(aux);
        }
    }

    let tamanhoCol = "col m" + this.props.tamanhoCol;
 
    let ListaCartao = function(grupo){
        return grupo.map(function(item, index){
           return(
            <div key={index} className={tamanhoCol}> 
                <Cartao dados = {item} addClique = { self.addClique } /> 
            </div>
           );
        });
    };

    let self = this;
    let linha = novaLista.map(function(grupo, index){
        return  (
            <div key={index} className="row">
                { ListaCartao (grupo, self) }
            </div>
        );
    });



    console.log(novaLista);

    return (
        <div> 
            <div className="row ">
                <Busca atualizarBusca={ this.atualizarBusca } onSubmit={ this.onSubmit } busca ={ this.state.busca }/>
            </div>
            <p>Quantidade de cliques: { this.state.cliques }</p>
            {linha}
        </div>
    );
  }
}

export default ListaCartao;


