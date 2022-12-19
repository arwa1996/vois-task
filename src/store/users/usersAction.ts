import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { UserType } from '../../types/UserType';
import { firebaseDB, userRef } from '../../util/firebase/firebaseConfig';

const getUsers = createAsyncThunk('user/getUser', async () => {
  const firestoreQuery = query(userRef);
  const data = await getDocs(firestoreQuery);
  const firebaseUsers: Array<UserType> = [];
  data.forEach((user) => {
    const userData: UserType = user.data() as UserType;
    firebaseUsers.push({
      docId: user.id,
      ...userData,
    });
  });

  return firebaseUsers as UserType[];
});

const deleteUser = createAsyncThunk('user/deleteUser', async (id: string) => {
  await deleteDoc(doc(firebaseDB, 'users', id));
});

export { getUsers, deleteUser };
