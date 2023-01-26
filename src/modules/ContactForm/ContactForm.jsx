// import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, FormikProps } from 'formik';
import * as Yup from 'yup';

import inititalState from './initialState';
import StyledBtn from 'shared/components/Button/Button.styled';
// import StyledContactForm from './ContactForm.styled';
import StyledLabel from './label.styled';
import { object } from 'prop-types';


const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const ContactForm = () => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    console.log(name, number);
    resetForm();
  };

  //  const handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //    console.log({ [name]: value });
     
  // };

  return (
    <Formik
      initialValues={inititalState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {
        <Form>
          <div>
            <StyledLabel>Name</StyledLabel>
            <Field type="text" name="name" />
          </div>
          <div>
            <StyledLabel>Number</StyledLabel>
            <Field type="number" name="number" />
          </div>

          <StyledBtn type="submit">Add contact</StyledBtn>
        </Form>
      }
    </Formik>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
