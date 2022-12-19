import { Result, Typography } from 'antd';

const NotFoundComponent = () => {
  const { Text } = Typography;
  return (
    <Result
      status='404'
      title={<Text type='danger'>404</Text>}
      subTitle={
        <Text type='danger'>Sorry, the page you visited does not exist.</Text>
      }
    />
  );
};

export default NotFoundComponent;
