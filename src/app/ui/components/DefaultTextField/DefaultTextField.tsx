import DefaultButton from "../DefaultButton/DefaultButton";
import "./DefaultTextField.css";

type DefaultTextFieldProps = {
  type?: string;
  topTitle?: string;
  insideTitle?: string;
  isSaveButtonIncluded?: boolean;
  onSaveClick?: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textFieldClassName?: string;
  isTextArea?: boolean;
  inputTitleClassName?: string;
};

export default function DefaultTextField({
  type,
  topTitle,
  insideTitle,
  isSaveButtonIncluded = false,
  onSaveClick,
  value,
  setValue,
  textFieldClassName,
  isTextArea = false,
  inputTitleClassName,
}: DefaultTextFieldProps) {
  return (
    <div className={"default_text_field"}>
      {topTitle && <span className={`input__title ${inputTitleClassName}`}>{`${topTitle}: `}</span>}
      <div className={`input ${isTextArea && "input--textarea"}`}>
        {insideTitle && (
          <h2 className={`input__title ${inputTitleClassName}`}>{`${insideTitle}: `}</h2>
        )}
        {isTextArea ? (
          <textarea
            className={`input__field input__field--textarea ${textFieldClassName}`}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          ></textarea>
        ) : (
          <input
            className={`input__field ${textFieldClassName}`}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            type={type}
          ></input>
        )}
        {isSaveButtonIncluded && (
          <DefaultButton
            title="Salvar"
            buttonClassName={`input__btn  ${isTextArea && "input__btn--end"}`}
            onClick={onSaveClick}
          ></DefaultButton>
        )}
      </div>
    </div>
  );
}
