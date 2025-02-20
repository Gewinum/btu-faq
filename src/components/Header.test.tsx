import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import Header from "./Header";

test("Header", () => {
  const {getByText} = render(<Header headerName="testing-header" />);
  expect(getByText("testing-header")).not.toBeNull();
});