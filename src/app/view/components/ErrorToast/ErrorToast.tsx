import { Flip, ToastContainer } from "react-toastify";
import "./ErrorToast.css";

// component to show a styled toast with an error message
export default function ErrorToast() {
  return (
    <ToastContainer
      className="error_dialog"
      position="bottom-center"
      autoClose={2400}
      closeButton={false}
      closeOnClick={false}
      limit={1}
      newestOnTop={false}
      rtl={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
      transition={Flip}
    />
  );
}
