import * as React from "react";
import QuestionSection from "./QuestionSection.tsx";
import {Section} from "../assets/data.tsx";

type QuestionSectionsProps = {
    sections: Array<Section>
}

class QuestionSections extends React.Component<QuestionSectionsProps> {
    render() {
        return (
            <div>
                {this.props.sections.map(section => (
                    <section key={section.name} className="terminal-section">
                        <QuestionSection name={section.name} questions={section.questions} />
                    </section>
                ))}
            </div>
        );
    }
}

export default QuestionSections;