import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import QuestionSections from "./QuestionSections.tsx";
import {Section} from "../assets/data.tsx";

test("QuestionSections", () => {
    const sections: Array<Section> = [
        {
            name: "section1",
            questions: [
                ["question1", "answer1"],
                ["question2", "answer2"]
            ]
        },
        {
            name: "section2",
            questions: [
                ["question3", "answer3"],
                ["question4", "answer4"]
            ]
        }
    ];
    const {getByText} = render(<QuestionSections sections={sections} />);
    for (const section of sections) {
        expect(getByText(section.name)).not.toBeNull();
        for (const question of section.questions) {
            expect(getByText(question[0])).not.toBeNull();
            expect(getByText(question[1])).not.toBeNull();
        }
    }
});