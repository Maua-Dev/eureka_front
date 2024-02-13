import { createContext } from "react";
import { DeliveryModel } from "../models/delivery-model";
import { RegistryDelivery, containerDelivery } from "../../@clean/shared/infra/containers/container_delivery";
import { GetDeliveriesUsecase } from "../../@clean/modules/delivery/usecases/get-deliveries-usecase";
import { useErrorBoundary } from "react-error-boundary";
import { DeliveryAdapter } from "../adapters/delivery-adapter";
import { CreateDeliveryUsecase } from "../../@clean/modules/delivery/usecases/create-delivery-usecase";

type DeliveryContextType = {
    deliveriesList: DeliveryModel[];
    createDelivery(delivery: DeliveryModel): Promise<DeliveryModel | undefined>;
    getDeliveries(projectId: number): Promise<DeliveryModel[] | undefined>;
}

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
    let deliveriesList: DeliveryModel[] = [];

    // used to show the error boundary (error threatment)
    const { showBoundary } = useErrorBoundary();

    const createDelivery = async (delivery: DeliveryModel) => {
        try {
            const deliveryCreated = await createDeliveryUsecase.execute(DeliveryAdapter.fromModel(delivery));
            return DeliveryAdapter.toModel(deliveryCreated);
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    const getDeliveries = async (projectId: number) => {
        try {
            const deliveriesCaught = await getDeliveriesUsecase.execute(projectId);
            const deliveriesModel = deliveriesCaught.map(delivery => DeliveryAdapter.toModel(delivery));
            deliveriesList = deliveriesModel;
            return deliveriesList;
        } catch (err) {
            console.error(err);
            showBoundary(err);
        }
    };

    return (
        <DeliveryContext.Provider value={{ deliveriesList, createDelivery, getDeliveries }}>
            {children}
        </DeliveryContext.Provider>
    );
};
