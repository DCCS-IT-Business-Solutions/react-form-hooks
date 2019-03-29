import * as React from "react";

export interface IFieldStateInput {
  initialValue: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface IFieldState {
  input: IFieldStateInput;
  touched: boolean;
  error: string;
}

export type ValidationFn = (v: any) => string | null;

export function useFieldState(
  initialValue: any,
  valFn: ValidationFn
): IFieldState {
  const [value, setValue] = React.useState(initialValue);
  const [touched, setTouched] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
    setTouched(e.currentTarget.value !== initialValue);
    //    handleBlur();
  }

  function handleBlur(e: React.FormEvent<HTMLInputElement>) {
    if (valFn != null) {
      setError(valFn(e.currentTarget.value) || "");
    }
    setValue(e.currentTarget.value);
    setTouched(e.currentTarget.value !== initialValue);
  }

  return {
    input: {
      initialValue: value,
      onChange: true ? handleChange : undefined,
      onBlur: handleBlur
    },
    touched,
    error
  };
}
