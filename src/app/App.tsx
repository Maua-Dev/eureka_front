import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import Footer from "./view/components/Footer/Footer";
import Header from "./view/components/Header/Header";
import "./view/styles/global.css";
import "./view/styles/variables.css";
import { ProjectProvider } from "./context/project-context";
import { AuthProvider } from "./context/auth-context";
import { ErrorBoundary } from "react-error-boundary";
import { TaskProvider } from "./context/task-context";
import { DeliveryProvider } from "./context/delivery-context";
import "react-toastify/dist/ReactToastify.css";
import DefaultError from "./view/pages/DefaultError/DefaultError";
import ErrorDialog from "./view/components/ErrorDialog/ErrorDialog";

export type States = {
  [key: string]: boolean;
}

function App() {
  return (
    <div className="app_container">
      <BrowserRouter>
        <ErrorDialog />
        <ErrorBoundary FallbackComponent={DefaultError}>
          <AuthProvider>
            <DeliveryProvider>
              <TaskProvider>
                <ProjectProvider>
                  <Header />
                  <AppRouter />
                  <Footer />
                </ProjectProvider>
              </TaskProvider>
            </DeliveryProvider>
          </AuthProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div >
  );
}

export default App;
