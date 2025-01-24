import BackButton from "./BackButtonProps.tsx";
import useGoBack from "./navigations/useGoBack.ts";
import {Link} from "react-router-dom";
import Card from "./Card.tsx";
import properties from "../assets/properties.json";
import jsonIcon from '../assets/json-icon.svg';


export function StringUtils() {
    return (<>
        <BackButton onClick={useGoBack()}/>
        <div className="tools-container">
            <Link to="/code-tools/json-lint">
                <Card cardText={properties.beautify_json} title="Json lint" iconPath={jsonIcon}/>
            </Link>
            {/*<Link to={"/code-tools/string-util"}>*/}
            {/*    <Card cardText={properties.string_utils} title="String Utils" iconPath={stringIcon}/>*/}
            {/*</Link>*/}
        </div>
    </>)
}