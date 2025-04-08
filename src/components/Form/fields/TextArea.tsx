import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input/TextArea';

export type TTextAreaProps = TextAreaProps;

export const TextArea = ({ disabled, ...props }: TTextAreaProps) => {
  return (
    <Input.TextArea
      {...props}
      disabled={disabled || undefined}
    />
  );
};
