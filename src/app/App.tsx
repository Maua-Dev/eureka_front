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

export type States = {
  [key: string]: boolean;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AuthProvider>
            <DeliveryProvider>
              <TaskProvider>
                <ProjectProvider>
                  <div className="app_container">
                    <Header />
                    <AppRouter />
                    <Footer />
                  </div>
                </ProjectProvider>
              </TaskProvider>
            </DeliveryProvider>
          </AuthProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

const ErrorFallback: React.FC<{ error: Error, resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>Algo deu errado!</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </div>
  );
};

export default App;
