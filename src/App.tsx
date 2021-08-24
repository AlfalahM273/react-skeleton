import Sample from "./pages/sample";
import Login from "./pages/login";
import "./ui/styles/global.css";
import Providers from "./Providers";

function App(): JSX.Element {
  return (
    <Providers>
      <div>
        <Login />
        <Sample />
      </div>
    </Providers>
  );
}

export default App;
