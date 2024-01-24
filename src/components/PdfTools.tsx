import compressPdfIcon from '../assets/compress_pdf.svg';
import backButton from "../assets/left-arrow.png";
import mergePdfIcon from '../assets/merge_pdf.svg';
import properties from "../assets/properties.json";
import Card from "./Card";
import useGoBack from './navigations/useGoBack';
export default function PdfTools() {
  return (<>
    <button onClick={useGoBack()} className="backButton">
      <img src={backButton} alt="Back" />
    </button>
    <div className="pdf-tools-container">
      <Card cardText={properties.merge_pdf} title="Merge PDF" iconPath={mergePdfIcon} />
      <Card cardText={properties.compress_pdf} title="Compress PDF" iconPath={compressPdfIcon} />
    </div>
  </>)
}