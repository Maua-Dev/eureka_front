import "./DefaultButton.css";

type DefaultButtonProps = {
  title: string;
  buttonClassName?: string;
  onClick?: () => void;
};

export default function DefaultButton({ title, buttonClassName, onClick }: DefaultButtonProps) {
  return (
    <button onClick={onClick} className={`default_button ${buttonClassName}`}>
      <p className="default_button__title">{title}</p>
    </button>
  );
}
