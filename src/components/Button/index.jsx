import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, disabled, accentColor }) => {
  const buttonClassName = classNames('Button', {
    [`Button--${accentColor}`]: Boolean(accentColor),
  });

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  accentColor: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  disabled: false,
  accentColor: '',
};

export default Button;
