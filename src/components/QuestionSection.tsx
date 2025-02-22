import * as React from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import {Section} from "../assets/data.tsx";

type QuestionSectionProps = {
    sectionName: string;
    questions: Array<Array<string>>;
}

class QuestionSection extends React.Component<Section> {
    render() {
        return (
            <section key={this.props.name} className="terminal-section">
                <h2 className="terminal-prompt">{this.props.name}</h2>
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