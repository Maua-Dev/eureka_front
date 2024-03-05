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
import arrowIcon from "../../../assets/icons/arrow-icon.svg";
import { useState } from "react";

type ControlledTextFieldProps<T> = {
  value: T;
  options?: OptionsOrGroups<T, GroupBase<T>>;
  onChange: (newValue: SingleValue<T>, actionMeta: ActionMeta<T>) => void;
  getOptionLabel: GetOptionLabel<T>;
  getOptionValue: GetOptionValue<T>;
  noOptionsMessage: string;
  saveButtonIsincluded?: boolean;
  onClick?: () => void;
  title?: string;
  showDropDownIcon?: boolean;
  isSearchable?: boolean;
  controlledTextFieldClassName?: string;
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
  showDropDownIcon = true,
  isSearchable = false,
  controlledTextFieldClassName,
}: ControlledTextFieldProps<T>) {
  const [isControlledTextFieldOpen, setIsControlledTextFieldOpen] = useState<boolean | null>(null);

  return (
    <div className="controlled_text_field">
      {title && <h2 className="controlled_text_field__title">{title}</h2>}
      <Select
        className={`controlled_text_field__input ${controlledTextFieldClassName}`}
        value={value}
        components={{
          DropdownIndicator: () => {
            if (showDropDownIcon) {
              return (
                <img
                  className={`controlled_text_field__icon ${isControlledTextFieldOpen == null ? "" : isControlledTextFieldOpen ? "controlled_text_field__icon--down" : "controlled_text_field__icon--up"}`}
                  src={arrowIcon}
                  alt="Ícone de flecha"
                />
              );
            }
          },
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
              cursor: "pointer",
            };
          },
          indicatorSeparator(base) {
            return {
              ...base,
              height: "0",
            };
          },
          indicatorsContainer(base) {
            return {
              ...base,
              width: "fit-content",
              display: "flex",
              justifyContent: "flex-end",
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
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
              cursor: "pointer",
            };
          },
        }}
        isSearchable={isSearchable}
        backspaceRemovesValue={true}
        unstyled={true}
        placeholder=""
        options={options}
        onMenuOpen={() => setIsControlledTextFieldOpen(true)}
        onMenuClose={() => setIsControlledTextFieldOpen(false)}
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
