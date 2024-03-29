import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SurveyCard from './surveys/SurveyCard';

const dummySurvey = {
  title: 'My Survey',
  subject: 'Please give us your feedback',
  body: 'Do you like our product?',
  dateSent: '2021-08-01T00:00:00.000Z',
  yes: 143,
  no: 28,
  lastResponded: '2021-08-02T00:00:00.000Z',
  _id: '1',
};

function Landing({ user, history }) {
  if (user._id) {
    history.push('/surveys');
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'whisper', fontSize: '80px' }}>
        <span style={{ color: '#FF2400' }}>M</span>aily!
      </h1>

      <div style={{ textAlign: 'left', fontSize: '20px' }}>
        <p>
          Welcome to Maily, your go-to platform for seamless and efficient user
          feedback collection! Our application is designed with a user-friendly
          interface that allows you to effortlessly gather and manage feedback
          from your users.
        </p>
        <SurveyCard survey={dummySurvey} />
        <p>
          With Maily, you can engage your users, understand their needs, and
          make data-driven decisions. Our platform is built to help you uncover
          valuable insights about your product or service directly from the
          people who use it.
        </p>
        <p>
          Don't miss out on this opportunity to connect with your users and
          improve your offerings based on their feedback. Sign up today and
          start your journey towards better user understanding and improved
          product development.
        </p>
        <p>
          Join Maily now, and let's start gathering valuable insights together!
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.auth };
};

export default connect(mapStateToProps)(withRouter(Landing));
