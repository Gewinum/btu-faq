import 'terminal.css'
import Header from "./components/Header.tsx";
import Navbar from "./components/Navbar.tsx";
import data from "./assets/data.tsx";
import QuestionSections from "./components/QuestionSections.tsx";
import * as React from "react";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <header className="terminal-banner">
                    <Header headerName="BTU FAQ" />
                    <h3>ჯერ შეიხედეთ აქ <a href={"https://btu.edu.ge/faq/"}>(ბითიუს ოფიციალურ faq-ში)</a></h3>
                    <Navbar sections={data.navigation} />
                </header>
                <section>
                    <QuestionSections sections={data.questions} />
                </section>
            </div>
        );
    }
}

export default App;