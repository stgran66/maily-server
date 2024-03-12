import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Payments from './Payments';

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <>
            <li>
              <a
                href='/auth/google'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '64px',
                }}
              >
                <FcGoogle size={48} />
              </a>
            </li>
            <li>
              <a
                href='/auth/github'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '64px',
                }}
              >
                <FaGithub size={48} />
              </a>
            </li>
          </>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>
            <li>
              <a href='/api/logout'>Logout</a>
            </li>
          </>
        );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper' style={{ backgroundColor: '#FA8072' }}>
        <Link
          to={auth ? '/surveys' : '/'}
          className='left brand-logo'
          style={{ fontFamily: 'whisper', fontSize: '50px' }}
        >
          <span style={{ color: '#FF2400' }}>M</span>aily
        </Link>
        <ul
          className='right'
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
