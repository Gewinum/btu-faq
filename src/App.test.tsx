import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import App from "./App";
import data from "./assets/data.tsx";

test("App", () => {
    const {getByText} = render(<App />);
    expect(getByText(data.name)).not.toBeNull();
});