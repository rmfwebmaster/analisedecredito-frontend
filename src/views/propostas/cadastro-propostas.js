import React from 'react'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'

import { withRouter } from 'react-router-dom'
import * as messages from '../../components/toastr'

import PropostaService from '../../app/service/propostaService'

class CadastroPropostas extends React.Component {

    state = {
        id: null,
        nome : '',
        idade : '',
        sexo : '',
        estadoCivil : '',
        estado : '',
        dependentes: '',
        cpf: '',
        renda: '',
    }

    constructor(){
        super();
        this.service = new PropostaService();
    }

    submit = () => {

        const { nome, idade, sexo, estadoCivil, estado, dependentes, cpf, renda } = this.state;

        this.setState.idade = parseInt(this.state.idade);
        this.setState.dependentes = parseInt(this.state.dependentes);
        this.setState.renda = parseFloat(this.state.renda);

        const proposta = { nome, idade, sexo, estadoCivil, estado, dependentes, cpf, renda };

        try{
            this.service.validar(proposta)
        }catch(erro){
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => messages.mensagemErro(msg));
            return false;
        }

        this.service
            .salvar(proposta)
            .then(response => {
                this.props.history.push('/consulta-propostas')
                messages.mensagemSucesso('Proposta enviada com sucesso! Consulte o restultado da análise com o seu CPF')
            }).catch(error => {
            messages.mensagemErro(error.response.data.userMessage)
        })
    }


    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render(){
        const listaSexo = this.service.obterListaSexo();
        const listaEstadoCivil = this.service.obterListaEstadoCivil();
        const listaEstados = this.service.obterListaEstado();

        return (
            <div className="container">
                <Card title={ 'Cadastro de Proposta' }>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup id="inputNome" label="NOME: *" >
                                <input id="inputNome" type="text"
                                       className="form-control"
                                       name="nome"
                                       onChange={this.handleChange}  />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup id="inputCpf" label="CPF: * (Ex: 01307510302)" >
                                <input id="inputCpf" type="number"
                                       className="form-control"
                                       name="cpf"
                                       maxlength="11"
                                       onChange={this.handleChange}  />
                            </FormGroup>
                        </div>
                        <div className="col-md-3">
                            <FormGroup id="inputIdade" label="IDADE: *" >
                                <input id="inputIdade" type="number"
                                       className="form-control"
                                       name="idade"
                                       min="16"
                                       onChange={this.handleChange}  />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FormGroup id="inputSexo" label="SEXO: *">
                                <SelectMenu id="inputSexo" onChange={this.handleChange}
                                            lista={listaSexo}
                                            name="sexo"
                                            className="form-control" />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup id="inputEstadoCivil" label="ESTADO CIVIL: *">
                                <SelectMenu id="inputEstadoCivil"
                                            onChange={this.handleChange}
                                            lista={listaEstadoCivil}
                                            name="estadoCivil"
                                            className="form-control" />
                            </FormGroup>
                        </div>
                        <div className="col-md-4">
                            <FormGroup id="inputEstado" label="ESTADO: *">
                                <SelectMenu id="inputEstado"
                                            onChange={this.handleChange}
                                            lista={listaEstados}
                                            name="estado"
                                            className="form-control" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FormGroup id="inputDependentes" label="DEPENDENTES: *">
                                <input id="inputDependentes"
                                       type="number"
                                       name="dependentes"
                                       min="0"
                                       onChange={this.handleChange}
                                       className="form-control" />
                            </FormGroup>
                        </div>

                        <div className="col-md-6">
                            <FormGroup id="inputRenda" label="RENDA: *">
                                <input id="inputRenda"
                                       type="number"
                                       name="renda"
                                       min="0"
                                       step="0.01"
                                       onChange={this.handleChange}
                                       className="form-control" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6" >
                            <button onClick={this.submit}
                                    className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button onClick={e => this.props.history.push('/home')}
                                    className="btn btn-danger">
                                <i className="pi pi-times"></i>Cancelar
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(CadastroPropostas);