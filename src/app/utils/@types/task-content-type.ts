export type TaskContentType = {
  id: number;
  title: string;
  basePath: string;
  fileFormat?: string[];
  description?: string;
  downloadText?: string;
  maxSize?: number;
  maxNumber?: number;
};
