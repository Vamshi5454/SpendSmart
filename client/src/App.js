import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header.js";
import DashBoard from "./components/DashBoard/DashBoard.js";
import Expenses from "./components/Expenses/Expenses.js";
import ParentComponent from "./components/ParentComponent/ParentComponent.js";

function App() {
  return (
    <div className="App">
      {/* <h1>This the client side</h1> */}
      {/* <Home name="vamshi" /> */}
      <Header />
      {/* <DashBoard /> */}
      {/* <Expenses /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
