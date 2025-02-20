import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import Navbar from "./Navbar";

test("Navbar", () => {
  const {getByText} = render(<Navbar sections={{section1: "Section 1", section2: "Section 2"}} />);
  expect(getByText("Section 1")).not.toBeNull();
  expect(getByText("Section 2")).not.toBeNull();
});