import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Landing({ user, history }) {
  if (user._id) {
    history.push('/surveys');
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Maily!</h1>Collect feedback from your users
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.auth };
};

export default connect(mapStateToProps)(withRouter(Landing));
