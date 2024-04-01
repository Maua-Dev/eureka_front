import { useEffect, useState } from "react";
import ControlledTextField from "../../../../ui/components/ControlledTextField/ControlledTextField";
import { ResourceType } from "../../../../utils/@types/resource-type";
import "./ResourceCard.css";
import DefaultTextField from "../../../../ui/components/DefaultTextField/DefaultTextField";
import { ResourcesType } from "../../../../utils/@types/resources-type";

type ResourceCardProps = {
  resource: ResourceType;
  resources: ResourcesType;
  setResources: React.Dispatch<React.SetStateAction<ResourcesType>>;
};

type QuantityType = {
  quantity: number;
};

export default function ResourceCard({ resource, resources, setResources }: ResourceCardProps) {
  const options: QuantityType[] = Array.from({ length: resource.maximum + 1 }, (_, i) => ({
    quantity: i,
  }));

  const resourceFromContext = resources ? resources[resource.name] : null;

  const [quantity, setQuantity] = useState<QuantityType>({
    quantity: resourceFromContext?.quantity ?? 0,
  });
  const [justification, setJustification] = useState(resourceFromContext?.justification ?? "");
  const [specification, setSpecification] = useState(resourceFromContext?.specification ?? "");

  useEffect(() => {
    setResources((prevResources) => ({
      ...prevResources,
      [resource.name]: {
        justification: justification,
        quantity: quantity.quantity,
        specification: specification,
      },
    }));
  }, [justification, quantity, specification]);

  useEffect(() => {
    if (resourceFromContext?.quantity != null) {
      setQuantity({ quantity: resourceFromContext!.quantity! });
    }
  }, [resourceFromContext?.quantity]);

  useEffect(() => {
    if (resourceFromContext?.justification != null) {
      setJustification(resourceFromContext!.justification!);
    }
  }, [resourceFromContext?.justification]);

  useEffect(() => {
    if (resourceFromContext?.specification != null) {
      setSpecification(resourceFromContext!.specification!);
    }
  }, [resourceFromContext?.specification]);

  return (
    <div className="resource_card">
      <div className="resource_card__top">
        {resource.image && <img className="img" src={resource.image} alt={resource.title} />}
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
                controlledTextFieldClassName="controlled_text_field"
              />
            </div>
            <p className="maximum">{`(máximo: ${resource.maximum})`}</p>
          </div>
        </aside>
      </div>
      <div className="resource_card__bottom">
        {resource.hasSpecificationField && (
          <DefaultTextField
            setValue={setJustification}
            value={justification}
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
