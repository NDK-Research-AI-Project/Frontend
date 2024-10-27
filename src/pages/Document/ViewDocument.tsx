import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Table from '../../components/Tables/Table';
import PdfIcon from '../../images/icon/pdfIcon';
import { PdfDocument, FileType } from '../../types/pdfFileData';

const pdfData: PdfDocument[] = [
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Project Proposal',
    dateAdded: '2024-10-27',
    details: 'Detailed project proposal for Q4',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/project-proposal.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Design Document',
    dateAdded: '2024-10-25',
    details: 'UI/UX design document for the main project',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/design-document.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'User Manual',
    dateAdded: '2024-10-20',
    details: 'User manual for the application',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/user-manual.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Requirements Analysis',
    dateAdded: '2024-10-18',
    details: 'Requirements analysis for phase 1',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/requirements-analysis.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Final Report',
    dateAdded: '2024-10-15',
    details: 'Complete final report of the project',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/final-report.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Team Meeting Notes',
    dateAdded: '2024-10-10',
    details: 'Notes from the October team meeting',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/team-meeting-notes.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Budget Allocation',
    dateAdded: '2024-10-05',
    details: 'Budget breakdown for the upcoming quarter',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/budget-allocation.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Risk Assessment',
    dateAdded: '2024-10-03',
    details: 'Assessment of potential project risks',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/risk-assessment.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Project Schedule',
    dateAdded: '2024-09-30',
    details: 'Timeline for project milestones',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/project-schedule.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Employee Handbook',
    dateAdded: '2024-09-28',
    details: 'Guidelines and policies for new employees',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/employee-handbook.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Technical Specifications',
    dateAdded: '2024-09-25',
    details: 'Specifications for system architecture',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/technical-specifications.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Client Contract',
    dateAdded: '2024-09-20',
    details: 'Contract with client for Q4 deliverables',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/client-contract.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Training Guide',
    dateAdded: '2024-09-18',
    details: 'Guide for onboarding new employees',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/training-guide.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Performance Review',
    dateAdded: '2024-09-15',
    details: 'Quarterly performance review summary',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/performance-review.pdf',
  },
  {
    icon: <PdfIcon height={'30px'} width={'30px'} />,
    name: 'Annual Report',
    dateAdded: '2024-09-10',
    details: 'Annual report for the fiscal year',
    fileType: FileType.PDF,
    url: 'https://example.com/documents/annual-report.pdf',
  },
];

const columns: { label: string; key: keyof PdfDocument; sortable: boolean }[] =
  [
    { label: '', key: 'icon', sortable: false },
    { label: 'File Name', key: 'name', sortable: true },
    { label: 'Date Added', key: 'dateAdded', sortable: true },
    { label: 'Details', key: 'details', sortable: true },
    { label: 'File Type', key: 'fileType', sortable: true },
  ];

const ViewDocument = () => {
  return (
    <>
      <Breadcrumb pageName="Document" />

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <Table data={pdfData} columns={columns} heading="All files" />
      </div>
    </>
  );
};

export default ViewDocument;
