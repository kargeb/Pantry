// import React from 'react'
// import styled from 'styled-components'

// import H1 from '../../atoms/texts/H1';
// import Alert from '../../molecules/Alert';
// import Button from '../../atoms/buttons/Button';
// import SelectCategory from './SelectCategory';

// const InputVerticalWrapper = styled.div`
//   margin-top: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const DeleteCategoryView = (state, toDelete, alertMessage, isDeleteModalVisible, categories) => {
//     return (   <div>
//         <H1 marginBottom as="h2">
//           Usuń Kategorię
//         </H1>
//         <InputVerticalWrapper>
//           <SelectCategory
//             handleForm={this.handleForm}
//             toDelete={toDelete}
//             categories={categories}
//           />
//         </InputVerticalWrapper>
//         <Button
//           type="button"
//           onClick={() =>
//             toDelete ? this.toggleDeleteModal() : this.setAlertMessage('Wybierz kategorię!')
//           }
//         >
//           Usuń
//         </Button>
//         {alertMessage && <Alert>{alertMessage}</Alert>}
//       </div> );
// }

// export default DeleteCategoryView;
