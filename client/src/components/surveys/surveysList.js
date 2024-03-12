import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import PieChart from './PieChart';

const SurveysList = ({ surveys, fetchSurveys, deleteSurvey }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const handleDelete = surveyId => {
    deleteSurvey(surveyId);
  };

  console.log(surveys);

  const renderSurveys = () => {
    return surveys.reverse().map(survey => {
      return (
        <div className='card' key={survey._id}>
          <div className='card-content'>
            <a
              className='btn-floating btn-large waves-effect waves-light red right'
              onClick={() => handleDelete(survey._id)}
            >
              <i className='material-icons'>delete</i>
            </a>
            <span className='card-title' style={{ fontWeight: 'bold' }}>
              {survey.title}
            </span>
            <p>Subject: {survey.subject}</p>
            <p>Question: {survey.body}</p>
            <p className='card-date right'>
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            {survey.yes + survey.no > 0 ? (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <PieChart yes={survey.yes} no={survey.no} />
                <div style={{ marginLeft: '20px', textAlign: 'right' }}>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>{survey.yes}</span>{' '}
                    people responded with Yes <br />
                    <span style={{ fontWeight: 'bold' }}>{survey.no}</span>{' '}
                    people responded with No
                  </p>
                  <p className='card-date'>
                    Last Response:{' '}
                    {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ) : (
              <p>Still waiting for response....</p>
            )}
          </div>
        </div>
      );
    });
  };

  return <div className='surveys-list'>{renderSurveys()}</div>;
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveysList
);
