import { useState } from "react";
import ControlledTextField from "../../../../ui/components/ControlledTextField/ControlledTextField";
import { ResourceType } from "../../../../utils/@types/resource-type";
import "./ResourceCard.css";
import DefaultTextField from "../../../../ui/components/DefaultTextField/DefaultTextField";

type ResourceCardProps = {
  resource: ResourceType;
};

type QuantityType = {
  quantity: number;
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const options: QuantityType[] = Array.from({ length: resource.maximum + 1 }, (_, i) => ({
    quantity: i,
  }));

  const [quantity, setQuantity] = useState<QuantityType>(options[0]);
  const [specification, setSpecification] = useState<string>("");

  return (
    <div className="resource_card">
      <div className="resource_card__top">
        {resource.image && <img src={resource.image} alt={resource.title} />}
        <aside className="infos">
          <div>
            <h1 className="infos__title">{resource.title}</h1>
            {resource.description && <p className="infos__description">{resource.description}</p>}
          </div>
          <div className="infos__quantity">
            <p className="quantity_text">Qtde.:</p>
            <div className="quantity_input">
              <ControlledTextField<QuantityType>
                value={quantity}
                options={options}
                onChange={(value: QuantityType | null) => setQuantity(value!)}
                getOptionLabel={(option: QuantityType) => option.quantity.toString()}
                getOptionValue={(option: QuantityType) => option.quantity.toString()}
                noOptionsMessage=""
              />
            </div>
            <p className="maximum">{`(máximo: ${resource.maximum})`}</p>
          </div>
        </aside>
      </div>
      <div className="resource_card__bottom">
        {resource.hasSpecificationField && (
          <DefaultTextField
            setValue={setSpecification}
            value={specification}
            topTitle="Especificação"
            isTextArea={true}
            inputTitleClassName="input__title"
            textFieldClassName="input"
          />
        )}
        {resource.hasJustificationField && (
          <DefaultTextField
            setValue={setSpecification}
            value={specification}
            topTitle="Justificativa"
            isTextArea={true}
            inputTitleClassName="input__title"
            textFieldClassName="input"
          />
        )}
      </div>
    </div>
  );
}
