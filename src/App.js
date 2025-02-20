import Header from "./components/header";
import 'terminal.css';
import data from "./assets/data";
import Navbar from "./components/navbar";
import QuestionSections from "./components/questionSections";

function App() {
  return (
      <header>
          <Header headerName={data.name} />
          <Navbar sections={data.navigation} />
          <QuestionSections sections={data.questions} />
      </header>
  );
}

export default App;
