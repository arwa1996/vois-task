import React from 'react';
import { Card } from 'antd';
import styles from './Card.module.scss';

type cardProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  cardTitle?: string;
  actions?: React.ReactNode[] | React.ReactNode;
};

const AppCard: React.FC<cardProps> = ({ cardTitle, children, actions }) => {
  return (
    <div className={styles.cardContainer}>
      <Card
        title={<h1>{cardTitle}</h1>}
        bordered={false}
        className={styles.cardStyle}
        actions={[actions]}
      >
        <div>{children}</div>
      </Card>
    </div>
  );
};

export default AppCard;
