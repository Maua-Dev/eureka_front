import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import Footer from "./view/components/Footer/Footer";
import Header from "./view/components/Header/Header";
import "./view/styles/global.css";
import "./view/styles/variables.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app_container">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
