import "./ErrorPage.css";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";

type ErrorPageProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

// component to show a default error page if an unknown error occurs
export default function ErrorPage({ error, resetErrorBoundary }: ErrorPageProps) {
  return (
    <main className="error_page">
      <h2 className="error_page__title">Ops... Algo deu errado!</h2>
      <p className="error_page__message">{error.message}</p>
      <DefaultButton
        title="Tentar novamente"
        onClick={resetErrorBoundary}
        buttonClassName="error_page__btn"
      />
    </main>
  );
}
