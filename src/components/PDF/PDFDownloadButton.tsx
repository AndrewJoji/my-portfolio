import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  pdfPath: string; 
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ pdfPath }) => {
  return (
    <ButtonLink href={pdfPath} size="lg">
      <FontAwesomeIcon icon={faFilePdf} size="lg" />
      View or Download PDF
    </ButtonLink>
  );
};
// interface PDFDownloadButtonProps {
//   secret?: string;
// }

// const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
//   return (
//   //   <ButtonLink
//   //     href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
//   //     size="lg"
//   //   >
//   //     <FontAwesomeIcon icon={faFilePdf} size="lg" />
//   //     View or Download PDF
//   //   </ButtonLink>
//   // );
// };
export default PDFDownloadButton;


