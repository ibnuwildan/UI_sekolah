import "./App.css";
import Navigation from "./component/Navbar";
import Maincontent from "./component/Maincontent";
import Footer from "./component/Footer";
import "./style/stylesheet.css";

function App() {
  return (
    <div>
      <Navigation />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
