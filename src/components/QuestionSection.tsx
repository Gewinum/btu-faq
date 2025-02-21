import * as React from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

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
                            <Markdown components={{
                                p: "h3",
                            }} remarkPlugins={[remarkGfm]}>{question[0]}</Markdown>
                            <Markdown remarkPlugins={[remarkGfm]}>{question[1]}</Markdown>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default QuestionSection;