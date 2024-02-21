import Skeleton from "react-loading-skeleton";
import "./ControlledTextField.css";
import DefaultButton from "../DefaultButton/DefaultButton";

type ControlledTextFieldSkeletonProps = {
  title: string;
  saveButtonIsincluded?: boolean;
};

export default function ControlledTextFieldSkeleton({
  title,
  saveButtonIsincluded = false,
}: ControlledTextFieldSkeletonProps) {
  return (
    <div className="controlled_text_field">
      <h2 className="controlled_text_field__title controlled_text_field__title--skeleton">
        {title}:{" "}
      </h2>
      <Skeleton className="controlled_text_field__input" />
      {saveButtonIsincluded && (
        <DefaultButton title="Salvar" buttonClassName="controlled_text_field__btn" />
      )}
    </div>
  );
}
