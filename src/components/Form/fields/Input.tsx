import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';

export type TInputProps = AntdInputProps;

export const Input = ({ disabled, ...rest }: TInputProps) => {
  return (
    <AntdInput
      disabled={disabled || undefined}
      {...rest}
    />
  );
};
