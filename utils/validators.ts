import { Rule } from "effector-forms";
import isEmail from "validator/es/lib/isEmail";

export const rules = {
  required: (): Rule<unknown> => ({
    name: "required",
    validator: (value) => ({
      isValid: value != null && value !== "",
      errorText: "This field is required",
    }),
  }),
  email: (): Rule<string> => ({
    name: "email",
    validator: (value) => ({
      isValid: isEmail(value),
      errorText: "Email address should be valid",
    }),
  }),
  minLength: (min: number): Rule<string> => ({
    name: "minLength",
    validator: (value) => ({
      isValid: !value || value.length >= min,
      errorText: `Minimum length is ${min} characters`,
    }),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: "maxLength",
    validator: (value) => ({
      isValid: !value || value.length <= max,
      errorText: `Maximum length is ${max} characters`,
    }),
  }),
  confirmation: (name: string): Rule<string> => ({
    name: "confirmation",
    validator: (value, fields: Record<string, string>) => ({
      isValid: value === fields[name],
      errorText: "Passwords should mutch",
    }),
  }),
};
