import "reflect-metadata";
import { Container } from "inversify";
import { http } from "../axios/http";
import { DeliveryRepositoryMock } from "../repositories/delivery/delivery-repository-mock";
import { DeliveryRepositoryHttp } from "../repositories/delivery/delivery-repository-http";
import { CreateDeliveryUsecase } from "../../../modules/delivery/usecases/create-delivery-usecase";
import { GetDeliveriesUsecase } from "../../../modules/delivery/usecases/get-deliveries-usecase";

export const RegistryDelivery = {

    AxiosAdapter: Symbol.for("AxiosAdapter"),

    DeliveryRepositoryMock: Symbol.for("DeliveryRepositoryMock"),
    DeliveryRepositoryHttp: Symbol.for("DeliveryRepositoryHttp"),

    CreateDeliveryUsecase: Symbol.for("CreateDeliveryUsecase"),
    GetDeliveriesUsecase: Symbol.for("GetDeliveriesUsecase"),
};

export const containerDelivery = new Container();

containerDelivery.bind(RegistryDelivery.AxiosAdapter).toConstantValue(http);

containerDelivery.bind(RegistryDelivery.DeliveryRepositoryMock).to(DeliveryRepositoryMock);
containerDelivery.bind(RegistryDelivery.DeliveryRepositoryHttp).toDynamicValue((context) => {
    return new DeliveryRepositoryHttp(context.container.get(RegistryDelivery.AxiosAdapter));
});

containerDelivery.bind(RegistryDelivery.CreateDeliveryUsecase).toDynamicValue((context) => {
    if (import.meta.env.VITE_STAGE === "TEST") {
        return new CreateDeliveryUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryMock));
    } else if (import.meta.env.VITE_STAGE === "DEV" || import.meta.env.VITE_STAGE === "PROD") {
        return new CreateDeliveryUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryHttp));
    } else {
        return new CreateDeliveryUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryMock));
    }
});

containerDelivery.bind(RegistryDelivery.GetDeliveriesUsecase).toDynamicValue((context) => {
    if (import.meta.env.VITE_STAGE === "TEST") {
        return new GetDeliveriesUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryMock));
    } else if (import.meta.env.VITE_STAGE === "DEV" || import.meta.env.VITE_STAGE === "PROD") {
        return new GetDeliveriesUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryHttp));
    } else {
        return new GetDeliveriesUsecase(context.container.get(RegistryDelivery.DeliveryRepositoryMock));
    }
});
