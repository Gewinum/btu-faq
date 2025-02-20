import * as React from "react";

type QuestionSectionProps = {
    sectionName: string;
    questions: Array<Array<string>>;
}

class QuestionSection extends React.Component<QuestionSectionProps> {
    render() {
        return (
            <section id={this.props.sectionName} className="terminal-section">
                <h2 className="terminal-prompt">{this.props.sectionName}</h2>
                <ul>
                    {this.props.questions.map((question, index) => (
                        <li key={index}>
                            <h3 className="terminal-prompt">{question[0]}</h3>
                            <p>{question[1]}</p>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default QuestionSection;