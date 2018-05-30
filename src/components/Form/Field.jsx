/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  name, label, id,
  textArea, type,
  cols, rows, ...props
}) => {
  const inputId = id || name;
  const inputClassName = 'Form-input';

  const Input = textArea ? (
    <textarea
      id={inputId}
      name={name}
      className={inputClassName}
      cols={cols}
      rows={rows}
      {...props}
    />
  ) : (
    <input
      id={inputId}
      className={inputClassName}
      name={name}
      type={type}
      {...props}
    />
  );

  return (
    <div className="Form-field">
      <label
        htmlFor={inputId}
        className="Form-label"
      >{label}
      </label>
      {Input}
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  textArea: PropTypes.bool,
  cols: PropTypes.number,
  rows: PropTypes.number,
};

Field.defaultProps = {
  id: '',
  type: 'text',
  textArea: false,
  cols: 30,
  rows: 10,
};

export default Field;
