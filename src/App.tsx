import { Layout } from 'antd';
import { HeaderEmployee } from './components/Layout/Header/Header';
import AppRoutes from './Routes';
import styles from './App.module.scss';

function App() {
  const { Content } = Layout;

  return (
    <>
      <Layout className={styles.layoutBg}>
        <HeaderEmployee />
        <Content className={styles.contentStyle}>
          <AppRoutes />
        </Content>
      </Layout>
    </>
  );
}

export default App;
