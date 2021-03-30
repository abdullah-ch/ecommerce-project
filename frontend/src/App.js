import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./Components/GlobalState/GlobalState";
import Pages from "./Components/Pages/Pages";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Header />
          <Pages />
        </Router>
      </DataProvider>
    </div>
  );
};

export default App;
