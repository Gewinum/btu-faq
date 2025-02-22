import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import QuestionSections from "./QuestionSections.tsx";

test("QuestionSections", () => {
    const sections = {
        "section1": [
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
        ],
        "section2": [
            [
                "What is the capital of Spain?",
                "Madrid"
            ],
            [
                "What is the capital of Portugal?",
                "Lisbon"
            ],
            [
                "What is the capital of Greece?",
                "Athens"
            ]
        ]
    }
    const {getByText} = render(<QuestionSections sections={sections} />);
    for (const [sectionName, questions] of Object.entries(sections)) {
        expect(getByText(sectionName)).not.toBeNull();
        for (const question of questions) {
            expect(getByText(question[0])).not.toBeNull();
            expect(getByText(question[1])).not.toBeNull();
        }
    }
});