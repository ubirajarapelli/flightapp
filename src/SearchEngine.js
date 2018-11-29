import React, { Component } from 'react';

export default props => (
      <form className="search-engine">
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
            <input type="text" name="origin" id="origem"
              onChange={props.handleChange}
              value={props.origin}/>
          </div>
          <div className="search-engine-input">
            <label htmlFor="destino">Destino</label>
            <input type="text" name="destination" id="destino"
              onChange={props.handleChange} 
              value={props.destination} />
          </div>
          <div className="search-engine-input">
            <label htmlFor="ida">Ida</label>
            <input type="text" name="departure_date" id="ida" 
              onChange={props.handleChange}
              value={props.departure_date} />
          </div>
          <div className="search-engine-input">
            <label htmlFor="volta">Volta</label>
            <input type="text" name="return_date" id="volta" 
              onChange={props.handleChange}
              value={props.return_date}/>
          </div>
          <div className="search-engine-input">
            <button className="search-button" type="button" onClick={props.handleSearch}>Buscar</button>
          </div>
        </div>

        <div className="is-inline-input">
          <label htmlFor="adultos" className="sr-only">Adultos</label>
          <span className="select">
              <select name="adults" id="adultos" 
                onChange={props.handleChange}
                value={props.adults}>
                  <option value="1">1 Adulto</option>
                  <option value="2">2 Adultos</option>
                  <option value="3">3 Adultos</option>
                  <option value="4">4 Adultos</option>
                  <option value="5">5 Adultos</option>
              </select>
          </span>

          <label htmlFor="criancas" className="sr-only">criancas</label>
          <span className="select">
              <select name="children" id="criancas" 
                onChange={props.handleChange}
                value={props.children}>
                  <option value="0">Sem crianças</option>
                  <option value="1">1 Criança</option>
                  <option value="2">2 Crianças</option>
                  <option value="3">3 Crianças</option>
                  <option value="4">4 Crianças</option>
                  <option value="5">5 Crianças</option>
              </select>
          </span>
        </div>
      </form>
    )