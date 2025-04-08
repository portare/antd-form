import { Form, type FormItemProps } from 'antd';
import { useMemo } from 'react';

import { rules } from './helpers';

export type FieldSetProps = FormItemProps;

export const Fieldset = ({
  name,
  children,
  required,
  rules: _rules = [],
  help,
  ...props
}: FieldSetProps) => {
  const { status, errors } = Form.Item.useStatus();

  const localRules = useMemo(() => {
    const a = [..._rules];

    if (required) {
      a.push(rules.required);
    }
    return a;
  }, [required, _rules]);

  return (
    <Form.Item
      {...props}
      name={name}
      rules={localRules}
      hasFeedback={true}
      validateStatus={status}
      help={errors.length > 0 ? errors.join('\n') : help}
    >
      {children}
    </Form.Item>
  );
};
