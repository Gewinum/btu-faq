export default function QuestionSection({sectionName, questions}) {
    return (
        <div id={sectionName} key={sectionName}>
            <h2 className="terminal-prompt">{sectionName}</h2>
            {questions.map(([question, answer]) => (
                <div key={question}>
                    <h3>{question}</h3>
                    <p>{answer}</p>
                </div>
            ))}
        </div>
    )
}