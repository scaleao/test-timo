import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainProduto from './pages/Produto/main';
import DetalhesProduto from './pages/Produto/detalhes';
import CriarProduto from './pages/Produto/criar';
import EditarProduto from './pages/Produto/editar';
import DeletarProduto from './pages/Produto/deletar';
import MainCategoria from './pages/Categoria/main';
import DetalhesCategoria from './pages/Categoria/detalhes';
import CriarCategoria from './pages/Categoria/criar';
import EditarCategoria from './pages/Categoria/editar';
import DeletarCategoria from './pages/Categoria/deletar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/produtos" component={MainProduto} />
            <Route path = "/produtos/:id" component={DetalhesProduto} />
            <Route path = "/criarProduto" component={CriarProduto} />
            <Route path = "/editarProduto/:id" component={EditarProduto} />
            <Route path = "/deletarProduto/:id" component={DeletarProduto} />
            <Route exact path = "/categorias" component={MainCategoria} />
            <Route path = "/produtos/:id" component={DetalhesCategoria} />
            <Route path = "/criarProduto" component={CriarCategoria} />
            <Route path = "/editarProduto/:id" component={EditarCategoria} />
            <Route path = "/deletarProduto/:id" component={DeletarCategoria} />
        </Switch>
    </BrowserRouter>
)

export default Routes;