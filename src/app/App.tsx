import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import "./ui/styles/global.css";
import "./ui/styles/variables.css";
import { ProjectProvider } from "./context/project-context";
import { AuthProvider } from "./context/auth-context";
import { ErrorBoundary } from "react-error-boundary";
import { TaskProvider } from "./context/task-context";
import { DeliveryProvider } from "./context/delivery-context";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./ui/components/Header/Header";
import Footer from "./ui/components/Footer/Footer";
import ErrorAlert from "./ui/components/ErrorToast/ErrorAlert";

function App() {
  return (
    <div className="app_container">
      <BrowserRouter>
        <ErrorAlert />
        <AuthProvider>
          <DeliveryProvider>
            <TaskProvider>
              <ProjectProvider>
                <Header />
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <AppRouter />
                </ErrorBoundary>
                <Footer />
              </ProjectProvider>
            </TaskProvider>
          </DeliveryProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
