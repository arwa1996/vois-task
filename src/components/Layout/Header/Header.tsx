import React from 'react';
import { Layout } from 'antd';
import styles from './Header.module.scss';
import { Typography } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../../util/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

export const HeaderEmployee: React.FC = () => {
  const { Header } = Layout;
  const { Title } = Typography;
  const [user] = useAuthState(firebaseAuth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(firebaseAuth);
    navigate('/login');
  };

  return (
    <Header className={styles.headerStyle}>
      <a className={styles.headerLogoStyle} href='/'>
        <Title className={styles.title} level={2}>
          _ V O I S
        </Title>
      </a>
      {user && (
        <>
          <div className={styles.navContainer}>
            <div className={styles.headerLogoStyle}>
              <Title
                className={styles.title}
                level={5}
                onClick={() => navigate('/')}
              >
                Users List
              </Title>
            </div>
            <div
              className={styles.headerLogoStyle}
              onClick={() => navigate('/maps')}
            >
              <Title className={styles.title} level={5}>
                Maps
              </Title>
            </div>
          </div>

          <LogoutOutlined className={styles.iconStyle} onClick={logout} />
        </>
      )}
    </Header>
  );
};
