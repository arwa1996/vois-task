/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import styles from './Table.module.scss';
import { UserType } from '../../types/UserType';

interface TableProps {
  users: UserType[];
  handleDeleteUser: (id: string) => void;
  handleUpdateEmployeeStatus?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentStatus: string,
    id: string
  ) => void;
}

export const UsersTable: React.FC<TableProps> = ({
  users,
  handleDeleteUser,
}) => {
  const columns: ColumnsType<UserType> = [
    {
      title: 'User email',
      dataIndex: 'email',
      key: 'name',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: () => <Tag color='geekblue'>Admin</Tag>,
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => {
        let id = record.docId;
        return (
          <Space size='large'>
            <div
              onClick={() => {
                if (id) handleDeleteUser(id);
              }}
            >
              <a>Delete</a>
            </div>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      className={styles.tableStyle}
      rowClassName={() => styles.rowClassName1}
    />
  );
};
