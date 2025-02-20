import Header from "./components/header";
import 'terminal.css';
import data from "./assets/data";
import Navbar from "./components/navbar";
import QuestionSections from "./components/questionSections";

function App() {
  return (
      <div>
          <header className="terminal-banner">
              <Header headerName={data.name} />
              <h3>ჯერ შეიხედეთ აქ <a href={"https://btu.edu.ge/faq/"}>(ბითიუს ოფიციალურ faq-ში)</a></h3>
              <Navbar sections={data.navigation} />
          </header>
          <QuestionSections sections={data.questions} />
      </div>
  );
}

export default App;
