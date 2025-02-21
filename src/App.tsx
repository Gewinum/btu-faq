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
    }
}

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <header className="terminal-nav terminal-banner" style={styles.header}>
                    <Header headerName="BTU FAQ" />
                    <Navbar sections={data.navigation} />
                </header>
                <section style={styles.officialFaqLink}>
                    <a href="https://btu.edu.ge/faq/">BTU'S Official FAQ</a>
                </section>
                <section>
                    <QuestionSections sections={data.questions} />
                </section>
            </div>
        );
    }
}

export default App;