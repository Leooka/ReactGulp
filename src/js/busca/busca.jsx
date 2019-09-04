import React from 'react';

class Busca extends React.Component{
    constructor(props){
        super(props);
        this.atualizarBusca = this.atualizarBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    atualizarBusca(evento){
        this.props.atualizarBusca(evento);
    }

    onSubmit(evento){
        this.props.onSubmit(evento);
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit }>
                <div className="input-field col s6">
                    <input placeholder="Digite sua busca" onChange={ this.atualizarBusca } type="text" value={ this.props.busca }/>   
                    <label>Busca</label>
                </div>
            </form>
        );
    }
}

export default Busca;