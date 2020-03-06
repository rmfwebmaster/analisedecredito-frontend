import ApiService from '../apiservice'

import ErroValidacao from '../exception/ErroValidacao'

export default class PropostaService extends ApiService {

    constructor(){
        super('/propostas')
    }

    obterListaEstado(){
        return  [
            { label: 'Selecione...', value: '' },
            { label: 'AC', value: 'AC' },
            { label: 'AL', value: 'AL' },
            { label: 'AP', value: 'AP' },
            { label: 'AM', value: 'AM' },
            { label: 'BA', value: 'BA' },
            { label: 'CE', value: 'CE' },
            { label: 'DF', value: 'DF' },
            { label: 'ES', value: 'ES' },
            { label: 'GO', value: 'GO' },
            { label: 'MA', value: 'MA' },
            { label: 'MT', value: 'MT' },
            { label: 'MS', value: 'MS' },
            { label: 'MG', value: 'MG' },
            { label: 'PA', value: 'PA' },
            { label: 'PB', value: 'PB' },
            { label: 'PR', value: 'PR' },
            { label: 'PE', value: 'PE' },
            { label: 'PI', value: 'PI' },
            { label: 'RJ', value: 'RJ' },
            { label: 'RN', value: 'RN' },
            { label: 'RS', value: 'RS' },
            { label: 'RO', value: 'RO' },
            { label: 'RR', value: 'RR' },
            { label: 'SC', value: 'SC' },
            { label: 'SP', value: 'SP' },
            { label: 'SE', value: 'SE' },
            { label: 'TO', value: 'TO' }
        ]
    }

    obterListaSexo(){
        return  [
            { label: 'Selecione...', value: '' },
            { label: 'Masculino' , value : 'M' },
            { label: 'Feminino' , value : 'F' }
        ]

    }

    obterListaEstadoCivil(){
        return  [
            { label: 'Selecione...', value: '' },
            { label: 'solteiro' , value : 'solteiro' },
            { label: 'casado' , value : 'casado' },
            { label: 'divorciado' , value : 'divorciado' },
            { label: 'viúvo' , value : 'viúvo' },
        ]

    }

    validar(proposta){
        const erros = [];

        if(!proposta.nome){
            erros.push("Informe o seu nome.")
        }

        if(!proposta.sexo){
            erros.push("Informe o seu sexo.")
        }

        if(!proposta.cpf){
            erros.push("Informe o número do seu cpf.")
        }

        if(!proposta.idade){
            erros.push("Informe sua idade.")
        }

        if(!proposta.estado){
            erros.push("Informe o estado onde você reside.")
        }

        if(!proposta.estadoCivil){
            erros.push("Informe seu estado civil.")
        }

        if(!proposta.dependentes){
            erros.push("Informe quantos dependentes você possui.")
        }

        if(!proposta.renda){
            erros.push("Informe o valor de sua renda.")
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    salvar(proposta){
        return this.post('/', proposta);
    }

    obterPorCpf(propostaFiltro){
        let params = `/por-cpf/${propostaFiltro.cpf}`;

        return this.get(params);
    }

    listarTodas(){
        return this.get('/');
    }
}