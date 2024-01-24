import { Link } from 'react-router-dom';
import stringIcon from '../assets/double-quotes.png';
import jsonIcon from '../assets/json.png';
import backButton from "../assets/left-arrow.png";
import properties from "../assets/properties.json";
import Card from "./Card";
import useGoBack from "./navigations/useGoBack";
function CodeTools() {
    return (<>
        <button onClick={useGoBack()} className="backButton">
            <img src={backButton} alt="Back" />
        </button>
        <div className="pdf-tools-container">
            <Link to="/code-tools/json-lint">
                <Card cardText={properties.beautify_json} title="Json lint" iconPath={jsonIcon} />
            </Link>
            <Card cardText={properties.string_utils} title="String Utils" iconPath={stringIcon} />
        </div>
    </>)
}

export default CodeTools;