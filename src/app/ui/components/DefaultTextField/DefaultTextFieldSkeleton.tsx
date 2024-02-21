import Skeleton from "react-loading-skeleton";
import DefaultButton from "../DefaultButton/DefaultButton";
import "./DefaultTextField.css";

type DefaultTextFieldProps = {
  topTitle?: string;
  insideTitle?: string;
  isSaveButtonIncluded?: boolean;
  textFieldClassName?: string;
  isTextArea?: boolean;
};

export default function DefaultTextFieldSkeleton({
  topTitle,
  insideTitle,
  isSaveButtonIncluded = false,
  textFieldClassName,
  isTextArea = false,
}: DefaultTextFieldProps) {
  return (
    <div className={"default_text_field default_text_field--skeleton"}>
      {topTitle && <span className="input__title">{`${topTitle}: `}</span>}
      <div className={`input ${isTextArea && "input--textarea"}`}>
        {insideTitle && <h2 className="input__title">{`${insideTitle}: `}</h2>}
        {isTextArea ? (
          <Skeleton
            count={3}
            containerClassName={`input__field input__field--textarea ${textFieldClassName}`}
          ></Skeleton>
        ) : (
          <Skeleton containerClassName="input__field"></Skeleton>
        )}
        {isSaveButtonIncluded && (
          <DefaultButton
            title="Salvar"
            buttonClassName={`input__btn  ${isTextArea && "input__btn--end"}`}
          ></DefaultButton>
        )}
      </div>
    </div>
  );
}
