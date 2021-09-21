import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

export default class MainCategoria extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoria: [],
            erro: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/categoria`)
            .then(categoria =>
                categoria.json().then(categoria => this.setState({ categoria }))
            )
            .catch(erro => this.setState({ erro }));
    }

    render() {
        const { categoria } = this.state;
        return livro.map((categoria, index) => (

            <div className="categoria-list">
                <div key={index} className="card mb-4">
                    <h5 className="card-header">{categoria.nome}</h5>

                    <article key={categoria.id}>
                        <strong> {categoria.nome} </strong>
                        <p> <Link to={`/produtos/${categoria.id}`}> Acessar </Link> </p>
                        <br />
                    </article>
                </div>
            </div>
        ))
    };
}