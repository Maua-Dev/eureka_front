import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import Footer from "./view/components/Footer/Footer";
import Header from "./view/components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
