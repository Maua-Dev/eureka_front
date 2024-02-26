import { Flip, ToastContainer } from "react-toastify";
import "./ErrorAlert.css";

// component to show a styled toast with an error message
export default function ErrorAlert() {
  return (
    <ToastContainer
      className="error_alert"
      position="bottom-center"
      autoClose={2400}
      closeButton={false}
      closeOnClick={false}
      limit={5}
      newestOnTop={false}
      rtl={false}
      draggable={false}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      theme="colored"
      transition={Flip}
    />
  );
}
