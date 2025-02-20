import * as React from "react";

type QuestionSectionsProps = {
    sections: {[key: string]: Array<Array<string>>};
}

class QuestionSections extends React.Component<QuestionSectionsProps> {
    render() {
        return (
            <div>
                {Object.entries(this.props.sections).map(([sectionName, questions]) => (
                    <section id={sectionName} className="terminal-section">
                        <h2 className="terminal-prompt">{sectionName}</h2>
                        <ul>
                            {questions.map((question, index) => (
                                <li key={index}>
                                    <h3 className="terminal-prompt">{question[0]}</h3>
                                    <p>{question[1]}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        );
    }
}

export default QuestionSections;