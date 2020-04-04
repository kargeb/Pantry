import React from "react";
import styled from "styled-components";


class NewProductForm extends React.Component {

  state = {
    "name": "",
    "quantity": "",
    "category": "",
    "min": "1"
  }

  handleForm = (e) => {

      console.log(e.target.value);
      console.log(e.target.id);

      this.setState({[e.target.id]: e.target.value })

  }


  handleSubmit = () => {
    
    const {name, quantity, category, min} = this.state;
    
    if(name && quantity && category && min) {
      
      const newProduct = {
        name,
        quantity,
        category,
        min
      }
      
      console.log("wypelnoine wszystkie")
      this.props.addNewProduct(newProduct)
      
      this.setState({"name": "",
      "quantity": "",
      "category": "",
      "min": "1"})

    } else {
      console.log("WYPEŁNIJ  SZYSTKIE POLA")
    }

  }

  render() {

    const categories = this.props.categories;

    return (
      <form>
        <label htmlFor="name">
          Nazwa:
          <input id="name" placeholder="nazwa" type="text" onChange={this.handleForm} value={this.state.name}/>
        </label>
        <label htmlFor="quantity">
          Ilość:
          <input
            id="quantity"
            placeholder="posiadana ilość"
            type="number"
            onChange={this.handleForm}
            value={this.state.quantity}
          />
        </label>
        <label htmlFor="min">
          Minimalna ilość:
          <input
            id="min"
            type="number"
            placeholder="minimalna ilość"
         
            onChange={this.handleForm}
            value={this.state.min}
          />
        </label>
        <label htmlFor="category">
          Kategoria:
          <select id="category" onChange={this.handleForm} value={this.state.category}>
          <option value="" disabled hidden>
        </option>
         {categories.map( category => <option key={category} value="category">{category}</option>  )}
          </select>
        </label>
        <button type="button" onClick={this.handleSubmit}>Dodaj</button>
      </form>
    );
  }
}

export default NewProductForm;
