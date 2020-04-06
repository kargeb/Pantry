import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  width: 90vw;
  height: 90vh;
  background-color: grey;
  top: 5vh;
  left: 5vw;
`;

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);

    const { name, quantity, category, min, unit, id } = props.defaultProduct;

    console.log(unit);

    this.state = {
      name,
      quantity,
      category,
      min,
      unit,
      id,
    };

    // componentDidMount() {
    //   // const { name } = this.props.defaultProduct.name;
  }

  handleForm = e => {
    console.log(e.target.value);
    console.log(e.target.id);

    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, quantity, category, min, unit, id } = this.state;

    if (name && quantity && category && min && unit) {
      const newProduct = {
        name,
        quantity,
        category,
        min,
        unit,
        id,
      };

      console.log('wypelnoine wszystkie');
      this.props.addNewProduct(newProduct);

      this.setState({
        name: '',
        quantity: '',
        category: '',
        min: '1',
        unit: 'szt',
        id: null,
      });

      this.props.handleFormVisibility();
    } else {
      console.log('WYPEŁNIJ  SZYSTKIE POLA');
    }
  };

  handleCloseForm = (handleFormVisibility, resetDefaultProduct) => {
    resetDefaultProduct();
    handleFormVisibility();
  };

  render() {
    const {
      categories,
      handleFormVisibility,
      resetDefaultProduct,
    } = this.props;

    return (
      <StyledWrapper>
        <form>
          <label htmlFor="name">
            Nazwa:
            <input
              id="name"
              placeholder="nazwa"
              type="text"
              onChange={this.handleForm}
              value={this.state.name}
            />
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
          <label htmlFor="unit">
            Jednostka:
            <select
              id="unit"
              onChange={this.handleForm}
              value={this.state.unit}
            >
              <option value="szt">szt</option>
              <option value="l">l</option>
              <option value="kg">kg</option>
            </select>
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
            <select
              id="category"
              onChange={this.handleForm}
              value={this.state.category}
            >
              <option value="" disabled hidden />
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Dodaj
          </button>
        </form>
        <button
          type="button"
          onClick={() =>
            this.handleCloseForm(handleFormVisibility, resetDefaultProduct)
          }
        >
          Close
        </button>
      </StyledWrapper>
    );
  }
}

export default NewProductForm;
