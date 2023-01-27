import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import inititalState from './initialState';
import StyledBtn from 'shared/components/Button/Button.styled';
import StyledContactForm from './ContactForm.styled';
import StyledLabel from './label.styled';
// import { object } from 'prop-types';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const ContactForm = ({ formSubmitHandler }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const  submitHandler= formSubmitHandler({ name, number });
    console.log(name, number);
    if (submitHandler) {
      resetForm();
    }
    
  };

  return (
    <Formik
      initialValues={inititalState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {
        <StyledContactForm>
          <div>
            <StyledLabel>Name</StyledLabel>
            <Field type="text" name="name" />
          </div>
          <div>
            <StyledLabel>Number</StyledLabel>
            <Field type="number" name="number" />
          </div>

          <StyledBtn type="submit">Add contact</StyledBtn>
        </StyledContactForm>
      }
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
