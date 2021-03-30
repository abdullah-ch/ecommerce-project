import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./Components/GlobalState/GlobalState";
import Pages from "./Components/Pages/Pages";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Pages />
          <Header />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
