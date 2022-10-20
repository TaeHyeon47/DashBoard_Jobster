import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value.name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
