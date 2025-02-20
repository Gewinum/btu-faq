import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import QuestionSection from "./QuestionSection";

test("QuestionSection", () => {
    const sectionName = "Some name";

    const questions = [
        [
            "What is the capital of France?",
            "Paris"
        ],
        [
            "What is the capital of Germany?",
            "Berlin"
        ],
        [
            "What is the capital of Italy?",
            "Rome"
        ]
    ];
    const {getByText} = render(<QuestionSection sectionName={sectionName} questions={questions} />);
    expect(getByText(sectionName)).not.toBeNull();
    for (const question of questions) {
        expect(getByText(question[0])).not.toBeNull();
        expect(getByText(question[1])).not.toBeNull();
    }
});