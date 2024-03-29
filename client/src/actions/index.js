import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: response.data });
};

const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

const deleteSurvey = surveyId => async dispatch => {
  await axios.delete(`/api/surveys/${surveyId}`);
  dispatch(fetchSurveys());
};

export { fetchUser, handleToken, submitSurvey, fetchSurveys, deleteSurvey };
