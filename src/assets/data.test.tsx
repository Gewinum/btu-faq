import {expect, test} from "vitest";
import data from "./data.tsx";

test("data", () => {
    expect(data.name).not.toBeNull();

    data.sections.forEach((section) => {
        expect(section.name).not.toBeNull();
        section.questions.forEach((question) => {
            expect(question.length).toBe(2);
            expect(question[0]).not.toBeNull();
            expect(question[1]).not.toBeNull();
        });
    });
});