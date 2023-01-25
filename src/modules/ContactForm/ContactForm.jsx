// import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Formik, Field} from 'formik';
import * as Yup from 'yup';

import inititalState from './initialState';
import StyledBtn from 'shared/components/Button/Button.styled';
import StyledContactForm from './ContactForm.styled';
import StyledLabel from './label.styled';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const ContactForm = ({contacts}) => {
  const handleSubmit = (values, {resetForm, setValues}) => {
    console.dir(values);
    setValues(values)
    resetForm();
  };

  return (
    <Formik
      initialValues={inititalState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledContactForm>
        <div>
          <StyledLabel>Name</StyledLabel>
          <Field
            type='text' name="name"
          />
        </div>
        <div>
          <StyledLabel>Number</StyledLabel>
          <Field
            type='number' name="number"
          />
        </div>

        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledContactForm>
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
