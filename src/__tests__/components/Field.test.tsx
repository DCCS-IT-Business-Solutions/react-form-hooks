import * as React from "react";
import { shallow, mount } from "enzyme";
import { useFieldState } from "../../hooks/useFieldState";
import { Field } from "../../components/Field";

function FieldTest() {
  const demo = useFieldState("demo", null);
  return <Field label="Demo" state={demo} />;
}

it("should render", () => {
  const sut = shallow(<FieldTest />);
  expect(sut).toMatchSnapshot();
});
