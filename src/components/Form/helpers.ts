import type { GetProps } from 'antd';
import { Rule } from 'antd/es/form';

import type { TComponents } from './fields';
import type { FieldSetProps } from './Fieldset';

export const rules: Record<string, Rule> = {
  required: { required: true },
};

export type StructFromPath<Path extends readonly unknown[], Value = unknown> = Path extends [
  infer First,
  ...infer Rest,
]
  ? First extends number
    ? Value[]
    : { [K in First & string]: StructFromPath<Rest, Value> }
  : Value;

export type TConfig = FieldSetProps &
  {
    [K in keyof TComponents]: {
      component: K;
    } & GetProps<TComponents[K]>;
  }[keyof TComponents];
