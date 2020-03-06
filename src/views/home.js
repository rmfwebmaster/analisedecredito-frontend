import React from 'react'

class Home extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Bem vindo!</h1>
                    <p className="lead">Esse é seu sistema de Análise de Crédito.</p>
                    <p className="lead">Aqui você pode enviar uma proposta de análise de crédito, consultar o resultado da análise da sua proposta e lista todas as análises enviadas </p>
                    <hr className="my-4" />
                    <p>Utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg"
                        href="#/cadastro-propostas"
                        role="button"><i className="pi pi-money-bill"></i>
                         Cadastrar Proposta
                        </a>
                        <a className="btn btn-danger btn-lg"
                        href="#/consulta-propostas"
                        role="button"><i className="pi pi-money-bill"></i>
                         Consultar Proposta
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Home