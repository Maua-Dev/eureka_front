import Select, {
  ActionMeta,
  GetOptionLabel,
  GetOptionValue,
  GroupBase,
  OptionsOrGroups,
  SingleValue,
} from "react-select";
import "./ControlledTextField.css";
import DefaultButton from "../DefaultButton/DefaultButton";

type ControlledTextFieldProps<T> = {
  value: T;
  options?: OptionsOrGroups<T, GroupBase<T>>;
  onChange: (newValue: SingleValue<T>, actionMeta: ActionMeta<T>) => void;
  getOptionLabel: GetOptionLabel<T>;
  getOptionValue: GetOptionValue<T>;
  noOptionsMessage: string;
  saveButtonIsincluded?: boolean;
  onClick?: () => void;
  title: string;
};

export default function ControlledTextField<T>({
  value,
  options,
  onChange,
  getOptionLabel,
  getOptionValue,
  noOptionsMessage,
  saveButtonIsincluded = false,
  onClick,
  title,
}: ControlledTextFieldProps<T>) {
  return (
    <div className="controlled_text_field">
      <h2 className="controlled_text_field__title">{title}</h2>
      <Select
        className="controlled_text_field__input"
        value={value}
        components={{
          DropdownIndicator: null,
          NoOptionsMessage: () => noOptionsMessage,
        }}
        styles={{
          control(base) {
            return {
              ...base,
              width: "100%",
              border: "var(--thin-border)",
              borderRadius: "var(--input-radius)",
              backgroundColor: "var(--white)",
              boxShadow: "none",
              padding: "0 0.2rem",
              minHeight: "20px",
            };
          },
          menu(base) {
            return {
              ...base,
              top: "90%",
            };
          },
          menuList(base) {
            return {
              ...base,
              backgroundColor: "var(--extra-light-blue)",
              borderRadius: "var(--input-radius)",
              width: "100%",
              margin: "0",
              border: "var(--thin-border)",
            };
          },
          option(base) {
            return {
              ...base,
              padding: "0.2rem",
            };
          },
        }}
        backspaceRemovesValue={true}
        unstyled={true}
        placeholder=""
        options={options}
        onChange={onChange}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
      />
      {saveButtonIsincluded && (
        <DefaultButton
          title="Salvar"
          buttonClassName="controlled_text_field__btn"
          onClick={onClick}
        />
      )}
    </div>
  );
}
