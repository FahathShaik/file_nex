import compressPdfIcon from '../assets/compress_pdf.svg';
import mergePdfIcon from '../assets/merge_pdf.svg';
import properties from "../assets/properties.json";
import Card from "./Card";
import useGoBack from './navigations/useGoBack';
import BackButton from "./BackButtonProps.tsx";

export default function PdfTools() {
    return (<>
        <BackButton onClick={useGoBack()}/>
        <div className="tools-container">
            <Card cardText={properties.merge_pdf} title="Merge PDF" iconPath={mergePdfIcon}/>
            <Card cardText={properties.compress_pdf} title="Compress PDF" iconPath={compressPdfIcon}/>
        </div>
    </>)
}