import React from 'react'
import currencyFormatter from 'currency-formatter'

export default props => {

    const rows = props.propostas.map( proposta => {

        return (
            <tr key={proposta.id}>
                <td>{proposta.nome}</td>
                <td>{proposta.idade}</td>
                <td>{proposta.sexo}</td>
                <td>{proposta.estadoCivil}</td>
                <td>{proposta.estado}</td>
                <td>{proposta.dependentes}</td>
                <td>{ currencyFormatter.format(proposta.renda, { locale: 'pt-BR'}) }</td>
                <td>{proposta.resultadoAnalise ? "Aprovada" : "Negada"}</td>
                <td>{proposta.limite}</td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">NOME</th>
                    <th scope="col">IDADE</th>
                    <th scope="col">SEXO</th>
                    <th scope="col">ESTADO CIVIL</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">DEPENDENTES</th>
                    <th scope="col">RENDA</th>
                    <th scope="col">RESULTADO ANÁLISE</th>
                    <th scope="col">LIMITE</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

