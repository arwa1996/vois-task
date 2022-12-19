import { getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { UserType } from '../types/UserType';
import { userRef } from '../util/firebase/firebaseConfig';

function useFetchUsers() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const uid = useAppSelector((state) => state.user.users);
  const getUser = async () => {
    const firestoreQuery = query(userRef);
    const data = await getDocs(firestoreQuery);
    const firebaseUsers: Array<UserType> = [];

    data.forEach((user) => {
      const userData: UserType = user.data() as UserType;
      firebaseUsers.push({
        ...userData,
        uid: userData.uid,
      });
    });
    setUsers(firebaseUsers);
  };
  useEffect(() => {
    getUser();
  }, [uid]);
  return users;
}

export default useFetchUsers;
