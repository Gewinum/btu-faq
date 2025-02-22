import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import QuestionSection from "./QuestionSection.tsx";
import {Section} from "../assets/data.tsx";

test("QuestionSection", () => {
    const sectionInfo: Section = {
        name: "some name",
        questions: [
            ["question1", "answer1"],
            ["question2", "answer2"]
        ]
    };
    const {getByText} = render(<QuestionSection name={sectionInfo.name} questions={sectionInfo.questions} />);
    expect(getByText(sectionInfo.name)).not.toBeNull();
    for (const question of sectionInfo.questions) {
        expect(getByText(question[0])).not.toBeNull();
        expect(getByText(question[1])).not.toBeNull();
    }
});