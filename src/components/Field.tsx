import * as React from "react";
import { IFieldState } from "../hooks/useFieldState";

export function Field({ label, state }: { label: string; state: IFieldState }) {
  return (
    <p>
      <label>{label}</label>
      <input {...state.input} />
      {state.error.length > 0 && <small>{state.error}</small>}
    </p>
  );
}
