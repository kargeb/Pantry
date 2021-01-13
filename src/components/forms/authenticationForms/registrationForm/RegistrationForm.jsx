import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Button from '../../../atoms/buttons/Button';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';
import {
  registerUserInUsersDatabase,
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../../../../data/handlers';
import { checkForEmptyValues, setErrorMessages } from '../../../../helpers';

class RegistrationForm extends Component {
  state = {
    login: '',
    password: '',
    isAlertVisible: false,
    errorMessages: {
      login: '',
      password: '',
    },
  };

  handleForm = e => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    const emptyFieldsNames = checkForEmptyValues({ login, password });

    if (emptyFieldsNames.length !== 0) {
      const errorMessages = setErrorMessages(emptyFieldsNames, 'Nie moze byc puste!');

      this.setState({ errorMessages });
      return false;
    }

    const { setRegistrationStatus } = this.props;
    let newUserId = null;

    setRegistrationStatus(true);

    registerUserInUsersDatabase(login, password)
      .then(idObtainedFromDatabase => {
        newUserId = idObtainedFromDatabase;
        return newUserId;
      })
      .then(() => {
        //  new user registration in ProductsDatabase is done by adding first product
        return addInitialProductToDatabase(newUserId);
      })
      .then(() => {
        return addInitialCategoryToDatabase(newUserId);
      })
      .then(() => {
        console.log('Registration succeeded');
        setRegistrationStatus(false);
      });
  };

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <H1 marginBottomDouble>Rejestracja</H1>
        <Label htmlFor="login" alignLeft>
          Email
        </Label>
        <Input type="text" id="login" name="login" value={login} onChange={this.handleForm} />
        {errorMessages.login && <p>{errorMessages.login}</p>}
        <Label htmlFor="password" alignLeft>
          Hasło
        </Label>
        <Input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={this.handleForm}
        />
        <br />
        {errorMessages.password && <p>{errorMessages.password}</p>}
        <Button type="submit" onClick={this.handleSubmit}>
          Zarejestruj
        </Button>
        <br />
        <Link to="/login">
          <Button type="button" onClick={this.handleLogout}>
            Powrót do logowania
          </Button>
        </Link>
      </Modal>
    );
  }
}

export default RegistrationForm;
