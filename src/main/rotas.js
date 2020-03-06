import React from 'react'

import Home from '../views/home'
import CadastroPropostas from '../views/propostas/cadastro-propostas'
import ConsultaPropostas from '../views/propostas/consulta-propostas'



import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    {<Redirect to="/home" />}
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/consulta-propostas" component={ConsultaPropostas} />
                <Route path="/cadastro-propostas" component={CadastroPropostas} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas