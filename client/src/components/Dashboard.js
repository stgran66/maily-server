import { Link } from 'react-router-dom';
import SurveysList from './surveys/surveysList';

const Dashboard = () => {
  return (
    <div>
      <SurveysList />
      <div className='fixed-action-btn'>
        <Link to='/surveys/new' className='btn-floating btn-large red'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
