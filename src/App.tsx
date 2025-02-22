import 'terminal.css'
import Header from "./components/Header.tsx";
import Navbar from "./components/Navbar.tsx";
import data from "./assets/data.tsx";
import QuestionSections from "./components/QuestionSections.tsx";
import * as React from "react";

const styles = {
    header: {
        marginBottom: "1rem",
    },
    officialFaqLink: {
        fontSize: "1.5rem",
        marginBottom: "20px",
        marginLeft: "0.8rem"
    },
    content: {
        padding: "0.5rem",
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <header className="terminal-nav terminal-banner" style={styles.header}>
                    <Header headerName="BTU FAQ" />
                    <Navbar sections={data.sections} />
                </header>
                <section style={styles.officialFaqLink}>
                    <a href="https://btu.edu.ge/faq/">BTU'S Official FAQ</a>
                </section>
                <section style={styles.content}>
                    <QuestionSections sections={data.sections} />
                </section>
            </div>
        );
    }
}

export default App;