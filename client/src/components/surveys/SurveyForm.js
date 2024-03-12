import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';

const SurveyForm = props => {
  const renderFields = () => {
    return formFields.map(({ label, name }) => (
      <Field
        component={SurveyField}
        type='text'
        label={label}
        name={name}
        key={name}
      />
    ));
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
        {renderFields()}
        <Link
          to='/surveys'
          className=' btn-flat white-text'
          style={{ backgroundColor: '#FA8072	' }}
        >
          Cancel
        </Link>
        <button className='red btn-flat right white-text' type='submit'>
          Next
          <i className='material-icons right'>done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You should provide ${
        name !== 'recipients' ? 'a' : ''
      } ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
