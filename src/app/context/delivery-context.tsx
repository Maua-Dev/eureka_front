import { createContext, useState } from "react";
import { DeliveryModel } from "../models/delivery-model";
import {
  RegistryDelivery,
  containerDelivery,
} from "../../@clean/shared/infra/containers/container-delivery";
import { GetDeliveriesUsecase } from "../../@clean/modules/delivery/usecases/get-deliveries-usecase";
import { DeliveryAdapter } from "../adapters/delivery-adapter";
import { CreateDeliveryUsecase } from "../../@clean/modules/delivery/usecases/create-delivery-usecase";

type DeliveryContextType = {
  deliveriesList: DeliveryModel[];
  createDelivery(
    taskId: number,
    projectId: number,
    userId: number,
    content: { [key: string]: unknown }
  ): Promise<DeliveryModel | undefined>;
  getDeliveries(projectId: number): Promise<DeliveryModel[] | undefined>;
};

const defaultContext: DeliveryContextType = {
  deliveriesList: [],
  createDelivery: async () => DeliveryModel.empty(),
  getDeliveries: async () => [],
};

export const DeliveryContext = createContext(defaultContext);

const createDeliveryUsecase = containerDelivery.get<CreateDeliveryUsecase>(
  RegistryDelivery.CreateDeliveryUsecase
);

const getDeliveriesUsecase = containerDelivery.get<GetDeliveriesUsecase>(
  RegistryDelivery.GetDeliveriesUsecase
);

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {
  const [deliveriesList, setDeliveriesList] = useState<DeliveryModel[]>([]);

  const createDelivery = async (
    taskId: number,
    projectId: number,
    userId: number,
    content: { [key: string]: unknown }
  ) => {
    const deliveryCreated = await createDeliveryUsecase.execute(taskId, projectId, userId, content);

    return DeliveryAdapter.toModel(deliveryCreated);
  };

  const getDeliveries = async (projectId: number) => {
    const deliveriesCaught = await getDeliveriesUsecase.execute(projectId);
    const deliveriesModel = deliveriesCaught.map((delivery) => DeliveryAdapter.toModel(delivery));
    setDeliveriesList(deliveriesModel);
    return deliveriesList;
  };

  return (
    <DeliveryContext.Provider value={{ deliveriesList, createDelivery, getDeliveries }}>
      {children}
    </DeliveryContext.Provider>
  );
};
