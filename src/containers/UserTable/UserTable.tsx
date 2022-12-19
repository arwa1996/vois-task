import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { Modal } from '../../components/Modal/Modal';
import { UsersTable } from '../../components/Table/Table';
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../../store/users/usersAction';
import { useAppSelector } from '../../store/hooks';
import styles from './UserTable.module.scss';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

export const UserTable: React.FC = () => {
  const dispatch = useDispatch();
  const [users] = useAppSelector((state) => [state.user.users]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDeleteUser = async (id: string) => {
    await dispatch(deleteUser(id));
    dispatch(getUsers());
  };

  return (
    <>
      <Card className={styles.cardStyle}>
        <Button
          className={styles.buttonStyle}
          size='large'
          onClick={() => setIsModalVisible(true)}
          id='addEmployeeBtn'
        >
          Add User
        </Button>
        {users.length >= 1 && (
          <UsersTable users={users} handleDeleteUser={handleDeleteUser} />
        )}
      </Card>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
        modalTitle='Add User'
      >
        <RegisterPage title='Register' users={users} />
      </Modal>
    </>
  );
};
