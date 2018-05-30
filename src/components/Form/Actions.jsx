import React from 'react';
import Button from '../Button';

const FormActions = () => (
  <div className="Form-actions">
    <div className="Form-actionItem">
      <Button type="reset">Reset</Button>
    </div>
    <div className="Form-actionItem">
      <Button type="submit" accentColor="danger">Submit</Button>
    </div>
  </div>
);

export default FormActions;
