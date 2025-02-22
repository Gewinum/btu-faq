import { test, expect } from "vitest";
import {render} from "@testing-library/react";
import Navbar from "./Navbar.tsx";
import {Section} from "../assets/data.tsx";

test("Navbar", () => {
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
  const {getByText} = render(<Navbar sections={sections} />);
    for (const section of sections) {
        expect(getByText(section.name)).not.toBeNull();
    }
});