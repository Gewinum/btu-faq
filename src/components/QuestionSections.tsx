import * as React from "react";
import QuestionSection from "./QuestionSection.tsx";

type QuestionSectionsProps = {
    sections: {[key: string]: Array<Array<string>>};
}

class QuestionSections extends React.Component<QuestionSectionsProps> {
    render() {
        return (
            <div>
                {Object.entries(this.props.sections).map(([sectionName, questions]) => (
                    <section key={sectionName} id={sectionName} className="terminal-section">
                        <QuestionSection sectionName={sectionName} questions={questions} />
                    </section>
                ))}
            </div>
        );
    }
}

export default QuestionSections;