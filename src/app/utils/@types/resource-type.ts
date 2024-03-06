export type ResourceType = {
  name: string;
  resourceId: number;
  image?: string;
  title: string;
  description?: string;
  maximum: number;
  hasSpecificationField: boolean;
  hasJustificationField: boolean;
};
