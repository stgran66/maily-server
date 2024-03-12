import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import PieChart from './PieChart';

const SurveyCard = ({ survey }) => {
  const { _id, title, subject, body, dateSent, yes, no, lastResponded } =
    survey;

  const handleDelete = surveyId => {
    deleteSurvey(surveyId);
  };

  return (
    <div className='card' key={_id}>
      <div className='card-content'>
        <a
          className='btn-floating btn-large waves-effect waves-light red right'
          onClick={() => handleDelete(_id)}
        >
          <i className='material-icons'>delete</i>
        </a>
        <span className='card-title' style={{ fontWeight: 'bold' }}>
          {title}
        </span>
        <p>Subject: {subject}</p>
        <p>Question: {body}</p>
        <p className='card-date right'>
          Sent on: {new Date(dateSent).toLocaleDateString()}
        </p>
      </div>
      <div className='card-action'>
        {yes + no > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PieChart yes={yes} no={no} />
            <div style={{ marginLeft: '20px', textAlign: 'right' }}>
              <p>
                <span style={{ fontWeight: 'bold' }}>{yes}</span> people
                responded with Yes <br />
                <span style={{ fontWeight: 'bold' }}>{no}</span> people
                responded with No
              </p>
              <p className='card-date'>
                Last Response: {new Date(lastResponded).toLocaleString()}
              </p>
            </div>
          </div>
        ) : (
          <p>Still waiting for response....</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { deleteSurvey })(SurveyCard);
