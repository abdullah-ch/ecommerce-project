import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./Components/GlobalState/GlobalState";
import Pages from "./Components/Pages/Pages";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div>
          <Pages />
          <h1>Helloo</h1>
          <Header />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
