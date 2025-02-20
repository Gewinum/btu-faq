import QuestionSection from "./questionSection";

export default function QuestionSections({sections}) {
    return (
        <>
            {Object.entries(sections).map(([sectionName, questions]) => (
                <QuestionSection key={sectionName} sectionName={sectionName} questions={questions} />
            ))}
        </>
    )
}