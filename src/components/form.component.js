import React from 'react';

class Form extends React.Component {
  state = {
    cityName: ''
  }

  handleCityChange(e) {
    this.setState({
      cityName: e.target.value
    });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.props.search(this.state.cityName);
      document.activeElement.blur()
    }
  }

  render() {
    return (
      <div className="form-container">
        <div className="search form-inline">
          <label className="form-label">Busca tu ciudad:</label>
          <input type="text" className="form-control" placeholder="Nombre de la ciudad." value={this.state.cityName} onChange={e => this.handleCityChange(e)} onKeyPress={(e) => this.handleEnter(e)} />
          <button className="btn btn-primary but" onClick={() => this.props.search(this.state.cityName)}>Buscar</button>
        </div>
      </div>
    )
  }
}

export default Form;