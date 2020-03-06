import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import PropostasTable from './propostasTable'
import PropostaService from '../../app/service/propostaService'

import * as messages from '../../components/toastr'

class ConsultaPropostas extends React.Component {

    state = {
        nome : '',
        idade : '',
        sexo : '',
        estadoCivil : '',
        estado : '',
        dependentes: '',
        cpf: '',
        renda: '',
        resultadoAnalise: '',
        limite: '',
        propostas : [],
    }

    constructor(){
        super();
        this.service = new PropostaService();
    }

    componentDidMount(){
        this.listar();
    }

    buscar = () => {
        if(!this.state.cpf){
            messages.mensagemErro('O preenchimento do campo CPF é obrigatório.')
            return false;
        }

        const propostaFiltro = {
            cpf: this.state.cpf,
        };

        this.service
            .obterPorCpf(propostaFiltro)
            .then( resposta => {
                const proposta = Array(resposta.data);
                this.setState({ propostas: proposta })
            }).catch(erros => {
            messages.mensagemErro(erros.response.data.userMessage)
            })
    };

    listar = () => {
        this.service
            .listarTodas()
            .then( resposta => {
                const lista = resposta.data;

                if(lista.length === 0){
                    messages.mensagemAlert("Nenhum resultado encontrado.");
                }

                this.setState({ propostas: lista })
            }).catch(erros => {
            messages.mensagemErro(erros.response.data)
        })
    };

    render(){

        return (
            <div className="container-fluid">
                <Card title="Consulta Proposta">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bs-component">
                                <div className="form-row align-items-center">
                                    <div className="col-auto">
                                        <FormGroup label="CPF: * (Ex: 01307510302)" htmlFor="inputCpf">
                                            <input type="number"
                                                   id="inputCpf"
                                                   pattern="[0-9]*"
                                                   className="form-control"
                                                   name="cpf"
                                                   onChange={e => this.setState({cpf: e.target.value})}
                                                   maxlength="11"
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col-auto">
                                        <button onClick={this.buscar}
                                                type="button"
                                                className="btn btn-success mt-3">
                                            <i className="pi pi-search"></i> Buscar
                                        </button>
                                    </div>
                                    <div className="col-auto">
                                        <button onClick={this.listar}
                                                type="button"
                                                className="btn btn-info mt-3">
                                            <i className="pi pi-list"></i> Listar Todas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container-fluid">
                                <PropostasTable propostas={this.state.propostas} />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(ConsultaPropostas);