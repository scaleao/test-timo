import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class Categorias extends Component {
    state = {
        categoria: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:8000/api/categoria/${id}`)
            .then(categoria =>
                categoria.json().then(categoria => this.setState({ categoria }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { categoria, index } = this.state;

        return (
            <div className="categoria-info">
                <h1> {categoria.nome} </h1>
                <Link to={`/categorias`}> Voltar </Link> <br />
                <Link to={`/editarCategoria/${categoria.id}`}> Editar </Link> <br />
                <Link to={`/deletarcategoria/${categoria.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}