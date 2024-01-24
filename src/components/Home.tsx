import { Link } from "react-router-dom";
import codeIcon from "../assets/coding.png";
import imageIcon from "../assets/image.png";
import pdfIcon from "../assets/pdf-svgrepo-com.svg";
import properties from "../assets/properties.json";
import Card from "./Card";
export default function Home() {
  return (<>
    <div className="main-message"><h2 >Every tool you need to work with Files in one place</h2></div>
    <Link to="/pdf-tools"><Card cardText={properties.image_description} iconPath={pdfIcon} title="Pdf tools" />
    </Link>
    <Card cardText={properties.image_description} iconPath={imageIcon} title="Image tools" />
    <Link to="/code-tools"><Card cardText={properties.code_description} iconPath={codeIcon} title="Code tools" /></Link>
    {/* <Link to="/image-tools">
        <Card cardText={properties.image_description} iconPath={imageIcon} title="Image Tools" />
      </Link> */}
  </>)
}