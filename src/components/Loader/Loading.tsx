import { Spin } from 'antd';
import { useAppSelector } from '../../store/hooks';
import classes from './Loading.module.scss';

const Loading = () => {
  const commonLoading = useAppSelector((state) => state.common.loading);
  if (commonLoading)
    return (
      <div className={classes.backdrop}>
        <Spin className={classes.spinner} tip='Loading...' size='large' />
      </div>
    );
  return <></>;
};

export default Loading;
