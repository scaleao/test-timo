import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainProduto from './pages/Produto/main';
import DetalhesProduto from './pages/Produto/detalhes';
import CriarProduto from './pages/Produto/criar';
import EditarProduto from './pages/Produto/editar';
import DeletarProduto from './pages/Produto/deletar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={MainLivro} />
            <Route path = "/produtos/:id" component={DetalhesLivro} />
            <Route path = "/criarProduto" component={CriarProduto} />
            <Route path = "/editarProduto/:id" component={EditarProduto} />
            <Route path = "/deletarProduto/:id" component={DeletarProduto} />
        </Switch>
    </BrowserRouter>
)

export default Routes;