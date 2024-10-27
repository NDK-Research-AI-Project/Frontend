export enum FileType {
  PDF = 'pdf',
  DOCX = 'docx',
  PPTX = 'pptx',
  XLSX = 'xlsx',
}

export type PdfDocument = {
  icon?: JSX.Element;
  name: string;
  dateAdded: string; // ISO format date as a string
  details: string;
  fileType: FileType;
  url: string;
};
