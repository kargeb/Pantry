import React from "react";
import styled from "styled-components";


class NewQuestionForm extends React.Component {

  state = {
    "name": "",
    "quantity": "",
    "category": "",
  }

  handleForm = (e) => {

      console.log(e.target.value);
      console.log(e.target.id);

      this.setState({[e.target.id]: e.target.value })

  }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nazwa
          <input id="name" placeholder="podaj nazwę produktu" type="text" onChange={this.handleForm} value={this.state.name}/>
        </label>
        <label htmlFor="quantity">
          Ilość
          <input
            id="quantity"
            placeholder="podaj nazwę produktu"
            type="number"
            onChange={this.handleForm}
            value={this.state.quantity}
          />
        </label>
        <label htmlFor="category">
          Kategoria
          <select id="category" onChange={this.handleForm} value={this.state.category}>
          <option value="" disabled hidden>
        </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <button type="button">Dodaj</button>
      </form>
    );
  }
}

export default NewQuestionForm;
