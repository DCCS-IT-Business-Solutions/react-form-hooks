import { FormEvent, useState } from "react";

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
  valFn?: ValidationFn
): IFieldState {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
    setTouched(e.currentTarget.value !== initialValue);
    //    handleBlur();
  }

  function handleBlur(e: FormEvent<HTMLInputElement>) {
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
