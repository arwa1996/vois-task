import React from 'react';
import { Modal as EmployeeModal } from 'antd';

type modalProps = {
  onCancel: () => void;
  onOk: () => void;
  open: boolean;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  modalTitle?: string;
};

export const Modal: React.FC<modalProps> = ({
  onCancel,
  onOk,
  open,
  children,
  modalTitle,
}) => {
  return (
    <div>
      <EmployeeModal
        title={modalTitle}
        open={open}
        onCancel={() => {
          onCancel();
        }}
        onOk={() => {
          onOk();
        }}
      >
        <div>{children}</div>
      </EmployeeModal>
    </div>
  );
};
