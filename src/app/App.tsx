import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import "@styles/global.css";
import "@styles/variables.css";
import { ProjectProvider } from "@context/project-context";
import { AuthProvider } from "@context/auth-context";
import { ErrorBoundary } from "react-error-boundary";
import { TaskProvider } from "@context/task-context";
import { DeliveryProvider } from "@context/delivery-context";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import ErrorAlert from "@components/ErrorToast/ErrorAlert";
import { UserProvider } from "@context/user-context";

function App() {
    return (
        <div className="app_container">
            <BrowserRouter>
                <ErrorAlert />
                <AuthProvider>
                    <UserProvider>
                        <DeliveryProvider>
                            <TaskProvider>
                                <ProjectProvider>
                                    <Header />
                                    <ErrorBoundary
                                        FallbackComponent={ErrorPage}
                                    >
                                        <AppRouter />
                                    </ErrorBoundary>
                                    <Footer />
                                </ProjectProvider>
                            </TaskProvider>
                        </DeliveryProvider>
                    </UserProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
