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
  deliveriesFromContext: DeliveryModel[];
  createDelivery(
    taskId: number,
    projectId: number,
    userId: number,
    content: { [key: string]: unknown }
  ): Promise<DeliveryModel | undefined>;
  getDeliveries(projectId: number): Promise<DeliveryModel[] | undefined>;
};

const defaultContext: DeliveryContextType = {
  deliveriesFromContext: [],
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
  const [deliveriesFromContext, setDeliveriesFromContext] = useState<DeliveryModel[]>([]);

  const createDelivery = async (
    taskId: number,
    projectId: number,
    userId: number,
    content: { [key: string]: unknown }
  ) => {
    const deliveryCreated = await createDeliveryUsecase.execute(taskId, projectId, userId, content);
    const deliveryModel = DeliveryAdapter.toModel(deliveryCreated);

    setDeliveriesFromContext((prevDeliveries) =>
      prevDeliveries.map((delivery) => {
        if (delivery.deliveryId === deliveryModel.deliveryId) {
          return deliveryModel;
        }
        return delivery;
      })
    );

    return deliveryModel;
  };

  const getDeliveries = async (projectId: number) => {
    const deliveriesCaught = await getDeliveriesUsecase.execute(projectId);
    const deliveriesModel = deliveriesCaught.map((delivery) => DeliveryAdapter.toModel(delivery));
    setDeliveriesFromContext(deliveriesModel);

    return deliveriesModel;
  };

  return (
    <DeliveryContext.Provider value={{ deliveriesFromContext, createDelivery, getDeliveries }}>
      {children}
    </DeliveryContext.Provider>
  );
};
