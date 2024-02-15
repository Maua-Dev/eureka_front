import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DefaultError.css";

type DefaultErrorProps = {
    error: Error;
    resetErrorBoundary: () => void;
};

// component to show a default error page if an unknown error occurs
export default function DefaultError({ error, resetErrorBoundary }: DefaultErrorProps) {
    return (
        <>
            <Header />
            <main className="default_error">
                <h2 className="default_error__title">Ops... Algo deu errado!</h2>
                <p className="default_error__message">{error.message}</p>
                <button onClick={resetErrorBoundary} className="default_error__btn">Tentar novamente</button>
            </main>
            <Footer />
        </>

    );
}