import AppCard from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import { userRef } from '../../util/firebase/firebaseConfig';
import { v4 as uuid } from 'uuid';
import { UserType } from '../../types/UserType';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { firebaseAuth } from '../../util/firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setUser } from '../../store/users/usersSlice';
import useFetchUsers from '../../hooks/useFetchUsers';
import { getUsers } from '../../store/users/usersAction';

type registerProps = {
  title: string;
  users?: UserType[];
};

const RegisterPage: React.FC<registerProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [adminError, setAdminError] = useState(false);
  const [error, setError] = useState('');
  const users = useFetchUsers();
  const usersEmail = users.map((user) => user.email);
  const [user, loading] = useAuthState(firebaseAuth);

  const Register = async (
    values: UserType,
    e: BaseSyntheticEvent | undefined
  ) => {
    e?.preventDefault();
    if (values) {
      //create user in data collection and check if it exests in that collection
      const email = values.email;
      const uid = uuid();
      const firestoreQuery = query(userRef, where('uid', '==', uid));
      const fetchUsers = await getDocs(firestoreQuery);
      if (fetchUsers.docs.length === 0 && usersEmail.indexOf(email) === -1) {
        try {
          await addDoc(userRef, {
            uid: uid,
            email: values.email,
            password: values.password,
            status: 'Admin',
          });
        } catch (err: any) {
          console.error(err);
          setAdminError(true);
          setError(err.message);
        }
      } else {
        setAdminError(true);
        setError('Duplicated user');
        setTimeout(() => setError(''), 4000);
      }
      dispatch(
        setUser({
          uid,
          email: values.email,
          password: values.password,
          status: 'Admin',
        })
      );
      dispatch(getUsers());
    }
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <>
      <AppCard cardTitle={title}>
        <Form
          Login={Register}
          adminError={adminError}
          error={error}
          submitButton='Register'
        />
      </AppCard>
    </>
  );
};

export default RegisterPage;
