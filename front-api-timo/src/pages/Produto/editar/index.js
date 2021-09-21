import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';

class EditarProduto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: {
                nome: "",
                descricao: "",
                valor: "",
                categoria_id: ""
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
        </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:8000/api/produto/${id}`)
            .then(data => {
                data.json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ livro: data });
                    }
                });
            })
            .catch(erro => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/Produto" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Produto</legend>
                        <div className="produto-insert">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="autor">Descricao </label>
                            <br />
                            <input
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="Descricao"
                                required
                                value={this.state.produto.descricao}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="isbn">Valor </label>
                            <br />
                            <input
                                type="number"
                                id="valor"
                                name="valor"
                                placeholder="Valor"
                                required
                                value={this.state.produto.valor}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="livro-insert">
                            <label htmlFor="valor">Categoria </label>
                            <br />
                            <input
                                type="text"
                                id="categoria_id"
                                name="categoria_id"
                                placeholder="Categoria"
                                required
                                value={this.state.produto.categoria_id}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Atualizar
                    </button>
                    </fieldset>
                </form>
            );
        }
    }


    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            livro: { ...prevState.livro, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.state.livro;

        fetch(`http://localhost:8000/api/produto/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.produto),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default EditarProduto;
