import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import App from "./App";
import data from "./assets/data.tsx";

test("App", () => {
    const {getByText} = render(<App />);
    expect(getByText(data.name)).not.toBeNull();

    for (const [name, questions] of Object.entries(data.questions)) {
        expect(getByText(name)).not.toBeNull();
        for (const question of questions) {
            expect(getByText(question[0])).not.toBeNull();
            expect(getByText(question[1])).not.toBeNull();
        }
    }
});