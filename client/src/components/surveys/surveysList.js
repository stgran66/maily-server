import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import SurveyCard from './SurveyCard';

const SurveysList = ({ surveys, fetchSurveys, deleteSurvey }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const renderSurveys = () => {
    return surveys.reverse().map(survey => {
      return <SurveyCard key={survey._id} survey={survey} />;
    });
  };

  return <div className='surveys-list'>{renderSurveys()}</div>;
};

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveysList);
