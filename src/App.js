import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchEngine from './SearchEngine';

// const API ='https://demo8346836.mockable.io/cars';
const API = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=7kGY2GI52CJxt2uUInBcxJRdxAM2pK6C&origin=BOS&destination=LON&departure_date=2018-12-22&return_date=2019-01-12&number_of_results=10`

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            payload: [],
            isLoading: false,
            error: null,
        }
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentDidMount() {

        this.setState({isLoading: true});

        axios.get(API)
        .then(response => this.setState({
            payload: response.data,
            isLoading: false

        }))
        .catch(error => this.setState({
            error,
            isLoading: false
        }))


    }

    componentWillMount() {}


    render(){
        const { payload, isLoading, error } = this.state;

        // const renderItens = () => {
        //     const itensList = payload || [];
        //     return itensList.map(item => (
        //         <div>
        //             {item.portas}
        //             {item.passageiros}
        //             {item.portaMalas}
        //             {item.arCondicionado}
        //             {item.transmissao}
        //             {item.direcao}
        //             {item.vidroEletrico}
        //             {item.multimedia}
        //             {item.radio}
        //         </div>
        //     ))
        // }

        // const renderCars = () => {
        //     const carsList = payload || [];

        //     return carsList.map(list => (
        //         <article className="product">
        //             {list.titulo}
        //             {list.codigoTaxa}
        //             {list.urlImagem}
        //             {list.detalhes}
        //             {list.marcas}
        //             {list.valorTotal}
        //             {list.porcentagemDesconto}
        //             {list.porcentagemDesconto}
        //             {list.qtdParcelas}
        //             {list.marca}
        //             {list.favorito}
        //             {renderItens()}
        //             <button>Reservar</button>
        //         </article>
        //     ))
        // }

        if (error) {
            return <div>{error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return (
            <section>
              <SearchEngine/>

            </section>
        );
    }
}


export default App;