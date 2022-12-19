import React, { BaseSyntheticEvent } from 'react';
import { Button, Space, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import { UserType } from '../../types/UserType';

type formProps = {
  Login: (values: UserType, event: BaseSyntheticEvent | undefined) => void;
  adminError?: boolean;
  error?: string;
  submitButton: string;
};
type FormInputs = {
  email: string;
  password: string;
  uid: string;
};
const Form: React.FC<formProps> = ({
  Login,
  adminError,
  error,
  submitButton,
}) => {
  const { Title, Text } = Typography;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const submit = (
    values: FormInputs,
    event: BaseSyntheticEvent | undefined
  ) => {
    event?.preventDefault();
    setTimeout(() => {
      Login(values, event);
    }, 500);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Space direction='vertical' size='small' style={{ display: 'flex' }}>
        <Title level={4}>Email</Title>
        <input
          placeholder='What is your email ?'
          type='email'
          className={styles.formInput}
          {...register('email', {
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
        />

        {errors.email && errors.email.type === 'required' && (
          <Text type='danger'>This field is required</Text>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <Text type='danger'>
            Please write your email in the correct pattern
          </Text>
        )}
        <Title level={4}>Password</Title>
        <input
          placeholder='What is your password ?'
          type='password'
          className={styles.formInput}
          {...register('password', {
            required: true,
            pattern: /^(?=.*[0-9])(?=.*[a-z])/,
            minLength: 6,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <Text type='danger'>This field is required</Text>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <Text type='danger'>
            Password must contain one digit from 1 to 9, one lowercase letter
          </Text>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Text type='danger'>Password must bt atleast 6 characters</Text>
        )}

        <Button
          type='primary'
          htmlType='submit'
          size='large'
          className={styles.submitButton}
        >
          {submitButton}
        </Button>
        {adminError && <Text type='danger'>{error}</Text>}
      </Space>
    </form>
  );
};

export default Form;
