import Sample from "./pages/sample";
import Login from "./pages/login";
import "./ui/styles/global.css";

function App(): JSX.Element {
  return (
    <div>
      <Login/>
      <Sample/>
    </div>
  );
}

export default App;
