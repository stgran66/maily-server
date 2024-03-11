import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name} style={{ marginBottom: '5px', fontSize: '16px' }}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please, confirm your entries</h5>
      {reviewFields}
      <button
        className='btn-flat white-text'
        style={{ backgroundColor: '#FA8072' }}
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className='red btn-flat white-text right'
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className='material-icons  right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
