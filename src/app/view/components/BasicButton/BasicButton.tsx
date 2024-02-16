import "./BasicButton.css";

type BasicButtonProps = {
  title: string;
  buttonClassName?: string;
  onClick?: () => void;
};

export default function BasicButton({ title, buttonClassName, onClick }: BasicButtonProps) {
  return (
    <button onClick={onClick} className={`basic_button ${buttonClassName}`}>
      <p className="basic_button__title">{title}</p>
    </button>
  );
}
