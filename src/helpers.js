export const checkForEmptyValues = objectToCheck => {
  const emptyProperties = [];

  Object.entries(objectToCheck).forEach(property => {
    let [key, value] = property;
    value = String(value).trim();

    if (value.length === 0) {
      emptyProperties.push(key);
    }
  });

  return emptyProperties;
};

export const checkForNonPositiveIntegers = objectToCheck => {
  const nonPositiveIntegers = [];

  Object.entries(objectToCheck).forEach(property => {
    let [key, value] = property;
    value = Number(value);

    if (!Number.isInteger(value) || value < 0) {
      nonPositiveIntegers.push(key);
    }
  });

  return nonPositiveIntegers;
};

export const setErrorMessages = (message, ...properties) => {
  const errorMessages = {};
  properties.forEach(property => {
    errorMessages[property] = message;
  });

  return errorMessages;
};

export const isPasswordStrong = password => {
  if (password.length >= 7) {
    return true;
  }

  return false;
};

export const validation = (fieldName, value) => {
  let errorMessage = {};

  switch (fieldName) {
    case 'login':
      const loginValue = String(value).trim();

      if (loginValue.length === 0) {
        errorMessage[fieldName] = 'Filed can not be empty';
        return errorMessage;
      } else if (!isEmailValid(loginValue)) {
        errorMessage[fieldName] = 'Invalid email address';
        return errorMessage;
      }
      return errorMessage;

    case 'password':
      const passwordValue = String(value).trim();

      if (passwordValue.length === 0) {
        errorMessage[fieldName] = 'Filed can not be empty';
        return errorMessage;
      } else if (passwordValue.length <= 5) {
        errorMessage[fieldName] =
          'Password is too weak (at least 6 characters)';
        return errorMessage;
      }
      return errorMessage;

    default:
      return;
  }
};

export const isEmailValid = email => {
  const pattern = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
  );

  if (pattern.test(email)) {
    return true;
  }
  return false;
};

export const authDataValidation = (login, password) => {
  let errorMessages = {};

  const loginErrors = validation('login', login);
  const passwordErrors = validation('password', password);

  errorMessages = {
    ...loginErrors,
    ...passwordErrors,
  };

  return errorMessages;
};
