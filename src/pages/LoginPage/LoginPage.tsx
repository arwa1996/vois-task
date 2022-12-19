import AppCard from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import { firebaseAuth } from '../../util/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserType } from '../../types/UserType';
import { useNavigate } from 'react-router-dom';
import { BaseSyntheticEvent, useEffect, useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [adminError, setAdminError] = useState(false);
  const [error, setError] = useState('');

  const Login = async (
    values: UserType,
    _e: BaseSyntheticEvent | undefined
  ) => {
    if (values) {
      try {
        await signInWithEmailAndPassword(
          firebaseAuth,
          values.email,
          values.password
        );
      } catch (err: any) {
        console.error(err);
        setAdminError(true);
        setError(err.message);
      }
    }
  };

  const [user, loading] = useAuthState(firebaseAuth);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <>
      <AppCard cardTitle='Login'>
        <Form
          Login={Login}
          adminError={adminError}
          error={error}
          submitButton='Login'
        />
      </AppCard>
    </>
  );
};

export default LoginPage;
