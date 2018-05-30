import React from 'react';
import PropTypes from 'prop-types';
import FormActions from './Actions';

import './Form.scss';

const Form = ({ children, ...props }) => (
  <form action="/" className="Form" {...props}>
    <fieldset className="Form-fieldSet">
      {children}
      <FormActions />
    </fieldset>
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: null,
};

export default Form;
