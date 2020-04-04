import React from "react";
import styled from "styled-components";

class NewQuestionForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          nazwa
          <input id="name" placeholder="podaj nazwę produktu" type="text" />
        </label>
        <label htmlFor="quantity">
          ilość
          <input
            id="quantity"
            placeholder="podaj nazwę produktu"
            type="number"
          />
        </label>
        <button type="button">Dodaj</button>
      </form>
    );
  }
}

export default NewQuestionForm;
