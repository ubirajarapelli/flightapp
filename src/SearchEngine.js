import React, { Component } from 'react';

class SearchEngine extends Component {

  constructor(props) {
    super(props);

    this.state = {
        origin: '',
        destination: '',
        departure_date: '',
        return_date: '',
        adults: '',
        children: '',
        nonstop: false,
        travel_class: '',
    }
  }

  render(){
    return(
      <div className="search-engine">
        <div className="is-inline">
        <span className="checkbox">
              <input type="checkbox" name="flight-group" id="only-departure"/>
              <label htmlFor="only-departure">Somente ida</label>
          </span>
          <span className="checkbox">
              <input type="checkbox" name="flight-group" id="only-direct"/>
              <label htmlFor="only-direct">Somente voos diretos</label>
          </span>
          <span className="checkbox">
              <input type="checkbox" name="flight-group" id="executive-class"/>
              <label htmlFor="executive-class">Classe Executiva</label>
          </span>
        </div>
        <div className="is-inline-input">
          <div className="search-engine-input">
            <label htmlFor="origem">Origem</label>
            <input type="text" name="" id="origem" value={props.origin}/>
          </div>
          <div className="search-engine-input">
            <label htmlFor="destino">Destino</label>
            <input type="text" name="" id="destino" value={props.destination} />
          </div>
          <div className="search-engine-input">
            <label htmlFor="ida">Ida</label>
            <input type="text" name="" id="ida" value={props.departure_date} />
          </div>
          <div className="search-engine-input">
            <label htmlFor="volta">Volta</label>
            <input type="text" name="" id="volta" value={props.return_date}/>
          </div>
          <div className="search-engine-input">
            <button className="search-button" type="button" onClick={props.handleSearch}>Buscar</button>
          </div>
        </div>

        <div className="is-inline-input">
          <label htmlFor="adultos" className="sr-only">Adultos</label>
          <span className="select">
              <select name="" id="adultos" value={props.adults}>
                  <option value="1">1 Adulto</option>
                  <option value="2">2 Adultos</option>
                  <option value="3">3 Adultos</option>
                  <option value="4">4 Adultos</option>
                  <option value="5">5 Adultos</option>
              </select>
          </span>

          <label htmlFor="criancas" className="sr-only">criancas</label>
          <span className="select">
              <select name="" id="criancas" value={props.children}>
                  <option value="0">Sem crianças</option>
                  <option value="1">1 Criança</option>
                  <option value="2">2 Crianças</option>
                  <option value="3">3 Crianças</option>
                  <option value="4">4 Crianças</option>
                  <option value="5">5 Crianças</option>
              </select>
          </span>
        </div>
      </div>
    )
  }
}

export default SearchEngine;
