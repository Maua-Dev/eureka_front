export type ResourcesType = {
  [key: string]: {
    specification: string | null;
    justification: string | null;
    quantity: number;
  };
};
