import React from 'react';
import { Select as SelectEmployeeStatus } from 'antd';

type selectProps = {
  onChange?: (value: string, option: any) => void;
  placeholder?: string;
  options?: any[];
};

export const Select: React.FC<selectProps> = ({
  onChange,
  options,
  placeholder,
}) => {
  const { Option } = SelectEmployeeStatus;
  return (
    <SelectEmployeeStatus
      showSearch
      size='large'
      placeholder={placeholder}
      onChange={(_, option) => {
        if (onChange) onChange(_, option);
      }}
      options={options}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
    >
      {options?.map((option, index) => {
        return (
          <Option value={option} key={index}>
            {option.value}
          </Option>
        );
      })}
    </SelectEmployeeStatus>
  );
};
