import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Entry
      </button>
    </li>
    {submitFailed && error && <span>{error}</span>}
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >
          Remove Entry
        </button>
        <h4>#{index + 1} Entry</h4>
        <Field
          name={`${member}.enterLabel`}
          type="text"
          component={renderField}
          label="Enter Label"
        />
        <Field
          name={`${member}.enterValue`}
          type="text"
          component={renderField}
          label="Enter value"
        />
      </li>
    ))}
  </ul>
);

const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const grabValues = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>College Club Registration Form</h1>
      <hr />
      <form onSubmit={handleSubmit(grabValues)}>
        <FieldArray name="members" component={renderMembers} />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "fieldArrays",
  validate,
})(FieldArraysForm);
